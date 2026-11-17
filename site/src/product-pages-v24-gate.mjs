import {nativeOutputStatus} from './native-preview-ui.js';
import {SLOT_WRITER_CAPABILITY, WEB05_WRITER_PORT} from './ui-state.js';

export const PAGES_V24_OFF_GATE_SCHEMA='HKIA.Web05.PagesV24OffGate.1';
const HEX=/^[0-9a-f]{64}$/;
const VERSIONS=new Set(['3.0.0','3.0.1']);
const PREVIEW_OPERATIONS=new Set([
  'collection-key1-ticks','collection-key1-add','collection-key1-remove',
  'achievement-timestamp','achievement-progress','puzzle-goals-complete',
  'batch-independent-scalars','collection-recipe-quantity'
]);
const fail=reason=>{throw Error('PAGES_V24_OFF_GATE_REJECTED: '+reason);};
const sameSource=(a,b)=>a.revision===b.revision&&a.generation===b.generation&&
  a.name===b.name&&a.format===b.format&&a.eligible===b.eligible;
const sourceIdentity=value=>({
  revision:value?.revision,generation:value?.generation,name:value?.name,
  format:value?.format,eligible:value?.eligible
});

export function createPagesV24OffGate({nativePreview,readSource}={}){
  if(!nativePreview||!['status','plan','verify','outputStatus'].every(
    method=>typeof nativePreview[method]==='function')||
    typeof readSource!=='function')throw new TypeError('EXISTING_NATIVE_PREVIEW_CONTROLLER_REQUIRED');

  function examine(){
    const blockers=[];
    let source={},session={},output={};
    try{source=sourceIdentity(readSource());}
    catch{blockers.push('SOURCE_IDENTITY_UNAVAILABLE');}
    try{session=nativePreview.status()??{};}
    catch{blockers.push('NATIVE_SESSION_STATUS_UNAVAILABLE');}
    try{output=nativePreview.outputStatus()??{};}
    catch{blockers.push('NATIVE_OUTPUT_STATUS_UNAVAILABLE');}
    const globalOff=nativeOutputStatus();
    if(SLOT_WRITER_CAPABILITY.enabled!==false||
       WEB05_WRITER_PORT.approved!==false||
       WEB05_WRITER_PORT.writerEnabled!==false||
       WEB05_WRITER_PORT.prepareOnly!==true||
       globalOff.apply!==false||globalOff.export!==false)
      blockers.push('PUBLIC_WRITER_BOUNDARY_NOT_OFF');
    if(source.format!=='zip'||source.eligible!==true||
       !HEX.test(source.revision??'')||
       !Number.isSafeInteger(source.generation)||source.generation<0||
       typeof source.name!=='string'||!source.name.trim())
      blockers.push('SOURCE_IDENTITY_OR_ZIP_INELIGIBLE');
    if(session.ready!==true||session.busy!==false||session.staged!=null)
      blockers.push('NATIVE_SESSION_NOT_IDLE_READY');
    if(session.revision!==source.revision||!VERSIONS.has(session.version))
      blockers.push('SOURCE_REVISION_OR_VERSION_MISMATCH');
    const capability=session.capability??{};
    if(capability.writerEnabled!==false||capability.canApply!==false||
       capability.canExport!==false||
       capability.betaWriterCandidateEnabled!==false||
       capability.productExportAvailable!==false||
       capability.devOutput?.mode!=='DEV_OUTPUT_OFF'||
       !Array.isArray(capability.devOutput?.authorizedOperations)||
       capability.devOutput.authorizedOperations.length!==0)
      blockers.push('NATIVE_WRITER_CAPABILITY_NOT_OFF');
    if(output.apply!==false||output.export!==false)
      blockers.push('NATIVE_OUTPUT_READY_NOT_OFF');
    const allowed=capability.allowedPreviewOperations;
    if(!Array.isArray(allowed)||!allowed.length||
       allowed.some(op=>!PREVIEW_OPERATIONS.has(op))||
       new Set(allowed).size!==allowed.length)
      blockers.push('PREVIEW_OPERATION_CATALOG_UNTRUSTED');
    const ready=blockers.length===0;
    const operations=ready?Object.freeze([...allowed]):Object.freeze([]);
    return {source,session,ready,operations,blockers};
  }

  function current(){
    const x=examine();
    return Object.freeze({
      schema:PAGES_V24_OFF_GATE_SCHEMA,
      ready:x.ready,
      phase:x.ready?'PREVIEW_ONLY_WRITER_OFF':'DISABLED_WRITER_OFF',
      version:x.ready?x.session.version:null,
      operations:x.operations,
      blockers:Object.freeze([...x.blockers]),
      originalUnchanged:true,
      externalSaveTransmission:false,
      nativeApplyAuthorized:false,
      nativeExportAuthorized:false,
      writerEnabled:false
    });
  }
  function begin(operation){
    const x=examine();
    if(!x.ready)fail(x.blockers.join('|')||'NOT_READY');
    if(!x.operations.includes(operation))fail('UNACCEPTED_PREVIEW_OPERATION');
    return {...x,operation};
  }
  function end(before){
    const after=examine();
    if(!after.ready||!sameSource(before.source,after.source)||
       before.session.version!==after.session.version||
       before.session.revision!==after.session.revision)
      fail('STALE_SOURCE_OR_SESSION_CAS');
    return after;
  }
  function assertPlan(p,expected){
    if(p?.schema!=='HKIA.04.ProductNativePlan.1'||
       p.operation!==expected.operation||p.revision!==expected.source.revision||
       p.version!==expected.session.version||p.writerEnabled!==false||
       p.canApply!==false||p.canExport!==false||!p.diff||
       !expected.operations.includes(p.operation))
      fail('UNTRUSTED_OR_WRITABLE_PLAN');
    const output=nativePreview.outputStatus(p);
    if(output?.apply!==false||output?.export!==false)
      fail('OUTPUT_CAPABILITY_ESCALATION');
  }
  async function planPreview(request){
    if(!request||typeof request!=='object')fail('UNTYPED_REQUEST');
    const before=begin(request.operation);
    const p=await nativePreview.plan(request);
    end(before);
    assertPlan(p,before);
    return p;
  }
  async function verifyPreview(p){
    const before=begin(p?.operation);
    assertPlan(p,before);
    const proof=await nativePreview.verify(p);
    end(before);
    if(proof?.schema!=='HKIA.04.ProductNativePreviewProof.1'||
       proof.version!==before.session.version||proof.operation!==p.operation||
       proof.writerEnabled!==false||proof.canApply!==false||
       proof.canExport!==false||proof.nativeOutputAuthorized!==false||
       proof.zipBytesReturned!==false||proof.saveExported!==false||
       proof.editedCopyBlobReopened!==true||
       proof.originalInputUnmodified!==true||
       proof.allNonTargetRawFramesPreserved!==true||
       proof.sourceAndCandidateCrcVerified!==true||
       proof.expandedMessagePackExactExpectedDiffOnly!==true)
      fail('UNTRUSTED_OR_WRITABLE_PREVIEW_PROOF');
    if(nativePreview.outputStatus(p)?.apply!==false||
       nativePreview.outputStatus(p)?.export!==false)
      fail('OUTPUT_CAPABILITY_ESCALATION');
    return proof;
  }
  return Object.freeze({status:current,planPreview,verifyPreview});
}


const SHA256=/^[0-9a-f]{64}$/;
const REVISION_SCHEMA='HKIA.Web05.SourceRevisionDisplay.1';
const SLOT_SCHEMA='HKIA.Web05.SlotDisplay.2';
const VALID_MODE='VALIDATED_BASELINE_READ';

function currentSignal(state){
  try{
    const epoch=Number.isSafeInteger(state?.sourceLoadEpoch)&&state.sourceLoadEpoch>=0?state.sourceLoadEpoch:0;
    const generation=Number.isSafeInteger(state?.accountEditGeneration)&&state.accountEditGeneration>=0?state.accountEditGeneration:0;
    const revision=state?.sourceRevision;
    const format=revision?.schema===REVISION_SCHEMA&&revision.format==='zip'?'zip':'unknown';
    const hash=typeof revision?.sha256==='string'&&SHA256.test(revision.sha256)?revision.sha256:null;
    const validRevision=format==='zip'&&hash!==null&&epoch>=1&&revision.epoch===epoch;
    const evidence=state?.slotEvidence;
    const supported=!!(evidence?.schema===SLOT_SCHEMA&&evidence.mode===VALID_MODE&&
      evidence.versionKnown===true&&(evidence.version==='3.0.0'||evidence.version==='3.0.1')&&
      evidence.writerEnabled===false&&evidence.nativeExportAuthorized===false&&
      evidence.accountExportAllowed===true&&evidence.unknownUnionTokens===0&&
      evidence.readable?.achievement===true&&evidence.readable?.counter===true&&
      evidence.readable?.['collection-history']===true);
    const loaded=!!(state?.archiveLoaded===true&&state?.save&&state?.account&&
      state?.originalBytes instanceof Uint8Array&&state.originalBytes.length>0&&
      typeof state.originalName==='string'&&/\.zip$/i.test(state.originalName));
    const sourceLoading=state?.sourceLoading===true;
    const dirty=state?.dirty===true;
    const eligible=supported&&loaded&&validRevision&&!sourceLoading&&!dirty&&
      Number.isSafeInteger(state?.accountEditGeneration)&&state.accountEditGeneration>=0;
    return Object.freeze({
      phase:eligible?'validated':sourceLoading||dirty||epoch>0?'invalidated':'unloaded',
      supported,loaded,sourceLoading,dirty,format,
      sourceLoadEpoch:epoch,sourceRevision:hash,accountEditGeneration:generation
    });
  }catch{
    return Object.freeze({
      phase:'invalidated',supported:false,loaded:false,sourceLoading:false,
      dirty:false,format:'unknown',sourceLoadEpoch:0,
      sourceRevision:null,accountEditGeneration:0
    });
  }
}

export function createInventoryUnknownHostBridge(readSource,publish=()=>{}){
  if(typeof readSource!=='function'||typeof publish!=='function')
    throw new TypeError('existing source owner and local sink required');
  let validated=null;
  const packet=current=>Object.freeze({current,validated});
  const unavailable=Object.freeze({phase:'invalidated',supported:false,loaded:false,
    sourceLoading:false,dirty:false,format:'unknown',sourceLoadEpoch:0,
    sourceRevision:null,accountEditGeneration:0});
  const safeSignal=()=>{try{return currentSignal(readSource());}catch{return unavailable;}};
  function snapshot(){return packet(safeSignal());}
  function notify(value){
    try{publish(value);}catch{}
    return value;
  }
  function invalidate(){validated=null;return notify(snapshot());}
  function acceptValidated(){
    const current=safeSignal();
    validated=current.phase==='validated'?current:null;
    return notify(packet(current));
  }
  return Object.freeze({snapshot,invalidate,acceptValidated});
}

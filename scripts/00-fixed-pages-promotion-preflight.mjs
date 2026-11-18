/**
 * Read-only, necessary-but-NOT-sufficient fixed Pages promotion preflight.
 * No Writer, session, registry, artifact creation, workflow trigger or deployment.
 * The future caller MUST independently authenticate GitHub Actions metadata,
 * pin the trusted 06C workflow blob, verify the complete site using the existing
 * pages-artifact-policy / 00-verify-beta-artifact machinery, and pass 06C review.
 */
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

const SHA40=/^[0-9a-f]{40}$/u;
const SHA64=/^[0-9a-f]{64}$/u;
const PUBLIC='Yumekiraboshi/HKIA-Editor';
const QA_WORKFLOW='.github/workflows/qa06c-accepted-pages-artifact.yml';
const MANIFEST='site-manifest.json';
const SITE=/^site\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]+\.(?:html|css|js|mjs|json|svg|wasm|webp)$/u;
const fail=(code)=>{throw Error(code);};
const sha=(bytes)=>createHash('sha256').update(bytes).digest('hex');
const exact=(v,keys,tag)=>{
  if(!v||typeof v!=='object'||Array.isArray(v))fail(tag+'_OBJECT');
  const actual=Object.keys(v).sort();
  if(JSON.stringify(actual)!==JSON.stringify([...keys].sort()))fail(tag+'_FIELDS');
  return v;
};
const hash=(v,re,tag)=>{if(typeof v!=='string'||!re.test(v))fail(tag);return v;};
const posInt=(v,tag)=>{if(!Number.isSafeInteger(v)||v<=0)fail(tag);return v;};

/** Canonical UTF-8 JSON rejects duplicate keys, hidden values and ambiguous serializations. */
export function parseCanonicalJson(bytes){
  if(!Buffer.isBuffer(bytes))fail('CANONICAL_JSON_BUFFER_REQUIRED');
  if(bytes.length<3||bytes.length>2*1024*1024)fail('CANONICAL_JSON_SIZE');
  let o;
  try{o=JSON.parse(bytes.toString('utf8'));}catch{fail('INVALID_JSON');}
  if(Buffer.from(JSON.stringify(o,null,2)+'\n').compare(bytes)!==0)fail('NONCANONICAL_JSON');
  return o;
}
const exactChangedPaths=(paths,tag)=>{
  if(!Array.isArray(paths)||paths.length<2||paths.length>33)fail(tag+'_COUNT');
  if(new Set(paths).size!==paths.length)fail(tag+'_DUP');
  if(!paths.includes(MANIFEST))fail(tag+'_NO_MANIFEST');
  for(const p of paths){
    if(typeof p!=='string'||p.length>180||p!==MANIFEST&&!SITE.test(p)||
       p.split('/').some(s=>s.startsWith('.')))fail(tag+'_UNSAFE');
  }
  return [...paths].sort();
};

/**
 * Trust boundary: observedRun and observedChangedPaths MUST be independently
 * obtained from authenticated GitHub Actions/API and immutable Git comparison.
 * This function does NOT authenticate those inputs; it NEVER grants deployment.
 */
export function inspectFixedPagesPromotion({
  proposal,currentPublic,observedRun,observedChangedPaths,candidateManifestBytes
}){
  exact(proposal,['schema','artifactRef','baseArtifactRef','manifestSha256',
    'baseManifestSha256','sourceSha256','writer','changedPaths','rollbackRef','qa'],'PROPOSAL');
  if(proposal.schema!=='HKIA.FixedPagesPromotionCandidate.1')fail('PROPOSAL_SCHEMA');
  const artifactRef=hash(proposal.artifactRef,SHA40,'ARTIFACT_SHA');
  const baseRef=hash(proposal.baseArtifactRef,SHA40,'BASE_SHA');
  const manifestSha=hash(proposal.manifestSha256,SHA64,'MANIFEST_SHA');
  const sourceSha=hash(proposal.sourceSha256,SHA64,'SOURCE_SHA');
  hash(proposal.baseManifestSha256,SHA64,'BASE_MANIFEST_SHA');
  hash(proposal.rollbackRef,SHA40,'ROLLBACK_SHA');
  if(proposal.writer!=='OFF')fail('WRITER_NOT_OFF');

  exact(currentPublic,['artifactRef','manifestSha256','writer','independentHttpsAccepted'],
    'CURRENT_PUBLIC');
  hash(currentPublic.artifactRef,SHA40,'CURRENT_SHA');
  hash(currentPublic.manifestSha256,SHA64,'CURRENT_MANIFEST_SHA');
  if(currentPublic.writer!=='OFF'||currentPublic.independentHttpsAccepted!==true)
    fail('CURRENT_NOT_ACCEPTED_OFF');
  if(baseRef!==currentPublic.artifactRef||
     proposal.baseManifestSha256!==currentPublic.manifestSha256||
     proposal.rollbackRef!==currentPublic.artifactRef)
    fail('ROLLBACK_BASE_NOT_ACCEPTED');
  if(artifactRef===baseRef||manifestSha===currentPublic.manifestSha256)
    fail('NO_VISIBLE_DELTA');

  const declared=exactChangedPaths(proposal.changedPaths,'DECLARED_DELTA');
  const observed=exactChangedPaths(observedChangedPaths,'OBSERVED_DELTA');
  if(JSON.stringify(declared)!==JSON.stringify(observed))fail('DELTA_CAS_MISMATCH');

  if(!Buffer.isBuffer(candidateManifestBytes)||sha(candidateManifestBytes)!==manifestSha)
    fail('MANIFEST_BYTES_MISMATCH');
  const manifest=parseCanonicalJson(candidateManifestBytes);
  if(manifest.schema!=='HKIA.BetaArtifactPreparation.1'||
     manifest.writer!=='OFF'||manifest.sourceSha256!==sourceSha||
     manifest.baseArtifactManifestSha256!==proposal.baseManifestSha256||
     !Number.isSafeInteger(manifest.entries)||manifest.entries<1||
     !manifest.files||typeof manifest.files!=='object'||Array.isArray(manifest.files)||
     Object.keys(manifest.files).length!==manifest.entries)
    fail('MANIFEST_SCOPE_MISMATCH');

  exact(proposal.qa,['runId','headSha','manifestSha256','evidenceSha256',
    'verdict','workflowPath'],'QA_RECEIPT');
  posInt(proposal.qa.runId,'QA_RUN_ID');
  hash(proposal.qa.headSha,SHA40,'QA_HEAD');
  hash(proposal.qa.manifestSha256,SHA64,'QA_MANIFEST');
  hash(proposal.qa.evidenceSha256,SHA64,'QA_EVIDENCE');
  if(proposal.qa.headSha!==artifactRef||proposal.qa.manifestSha256!==manifestSha||
     proposal.qa.verdict!=='INDEPENDENT_06C_SCOPED_PASS_FIXED_ARTIFACT'||
     proposal.qa.workflowPath!==QA_WORKFLOW)
    fail('QA_RECEIPT_MISMATCH');

  exact(observedRun,['id','repository','event','path','head_sha','status','conclusion'],
    'OBSERVED_RUN');
  if(observedRun.repository!==PUBLIC||observedRun.event!=='workflow_dispatch'||
     observedRun.path!==QA_WORKFLOW||observedRun.head_sha!==artifactRef||
     observedRun.status!=='completed'||observedRun.conclusion!=='success'||
     observedRun.id!==proposal.qa.runId)
    fail('QA_RUN_NOT_MATCHED');

  return Object.freeze({
    kind:'NECESSARY_READ_ONLY_PROMOTION_PREFLIGHT_NOT_RELEASE_ACCEPTANCE',
    artifactRef,manifestSha256:manifestSha,changedPaths:declared,
    writer:'OFF',checkedQaRunId:proposal.qa.runId,
    deploymentAuthorized:false,automaticDeployEnabled:false,
    requiresExternalProof:[
      'AUTHENTICATED_GITHUB_RUN_AND_GIT_DIFF_ORIGIN',
      'TRUSTED_06C_WORKFLOW_BLOB_AND_INDEPENDENT_ACCEPTANCE',
      'FULL_EXISTING_PUBLIC_ARTIFACT_PRIVACY_RIGHTS_AND_HASH_VERIFIER',
      'EXACT_ACCEPTED_CAPABILITY_MATRIX_AND_OWNER_SCOPE',
      'FIXED_06C_WORKFLOW_RELEASE_QA_AND_ROLLBACK',
      'POSTDEPLOY_INDEPENDENT_PUBLIC_HTTPS'
    ]
  });
}

if(process.argv[1]&&pathToFileURL(resolve(process.argv[1])).href===import.meta.url){
  if(process.argv.length!==7)fail('FIVE_JSON_INPUTS_REQUIRED');
  const read=p=>readFileSync(resolve(p));
  const [p,c,r,d,m]=process.argv.slice(2);
  const result=inspectFixedPagesPromotion({
    proposal:parseCanonicalJson(read(p)),
    currentPublic:parseCanonicalJson(read(c)),
    observedRun:parseCanonicalJson(read(r)),
    observedChangedPaths:parseCanonicalJson(read(d)),
    candidateManifestBytes:read(m)
  });
  process.stdout.write(JSON.stringify(result)+'\n');
}

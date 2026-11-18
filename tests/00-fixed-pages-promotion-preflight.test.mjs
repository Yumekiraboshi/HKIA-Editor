import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {
  inspectFixedPagesPromotion,parseCanonicalJson
} from '../scripts/00-fixed-pages-promotion-preflight.mjs';

const SHA40='a'.repeat(40), OLD40='b'.repeat(40);
const OLD64='c'.repeat(64), SOURCE64='d'.repeat(64);
const QA_WORKFLOW='.github/workflows/qa06c-accepted-pages-artifact.yml';
const hash=b=>createHash('sha256').update(b).digest('hex');
const pretty=o=>Buffer.from(JSON.stringify(o,null,2)+'\n');
function fixture(){
  const manifest={
    schema:'HKIA.BetaArtifactPreparation.1',
    state:'HKIA_PUBLIC_WRITER_OFF_CANDIDATE_NOT_DEPLOYED',writer:'OFF',
    sourceSha256:SOURCE64,baseArtifactManifestSha256:OLD64,
    entries:1,bytes:8,webp:0,modules:0,
    files:{'index.html':{bytes:8,sha256:hash(Buffer.from('testhtml'))}}
  };
  const candidateManifestBytes=pretty(manifest);
  const manifestSha=hash(candidateManifestBytes);
  return {
    candidateManifestBytes,
    proposal:{
      schema:'HKIA.FixedPagesPromotionCandidate.1',
      artifactRef:SHA40,baseArtifactRef:OLD40,
      manifestSha256:manifestSha,baseManifestSha256:OLD64,
      sourceSha256:SOURCE64,writer:'OFF',
      changedPaths:['site/index.html','site-manifest.json'],
      rollbackRef:OLD40,
      qa:{runId:12345,headSha:SHA40,manifestSha256:manifestSha,
        evidenceSha256:'e'.repeat(64),verdict:'INDEPENDENT_06C_SCOPED_PASS_FIXED_ARTIFACT',
        workflowPath:QA_WORKFLOW}
    },
    currentPublic:{
      artifactRef:OLD40,manifestSha256:OLD64,writer:'OFF',
      independentHttpsAccepted:true
    },
    observedRun:{id:12345,repository:'Yumekiraboshi/HKIA-Editor',
      event:'workflow_dispatch',path:QA_WORKFLOW,head_sha:SHA40,
      status:'completed',conclusion:'success'},
    observedChangedPaths:['site-manifest.json','site/index.html']
  };
}
const run=o=>inspectFixedPagesPromotion(o);
const rejects=(code,edit)=>{
  const x=fixture();edit(x);
  assert.throws(()=>run(x),e=>e instanceof Error&&e.message===code,code);
};
test('necessary fixed site and trusted-evidence-shape preflight never deploys',()=>{
  const o=run(fixture());
  assert.equal(o.artifactRef,SHA40);
  assert.equal(o.writer,'OFF');
  assert.deepEqual(o.changedPaths,['site-manifest.json','site/index.html']);
  assert.equal(o.deploymentAuthorized,false);
  assert.equal(o.automaticDeployEnabled,false);
  assert.equal(o.requiresExternalProof.length,6);
});
test('published base SHA, manifest and exact rollback must match accepted live proof',()=>{
  rejects('ROLLBACK_BASE_NOT_ACCEPTED',x=>{x.proposal.baseArtifactRef='f'.repeat(40);});
  rejects('ROLLBACK_BASE_NOT_ACCEPTED',x=>{x.proposal.baseManifestSha256='f'.repeat(64);});
  rejects('ROLLBACK_BASE_NOT_ACCEPTED',x=>{x.proposal.rollbackRef='f'.repeat(40);});
  rejects('CURRENT_NOT_ACCEPTED_OFF',x=>{x.currentPublic.independentHttpsAccepted=false;});
});
test('no byte-identical or same-artifact redeployment',()=>{
  rejects('NO_VISIBLE_DELTA',x=>{x.proposal.artifactRef=OLD40;});
  rejects('NO_VISIBLE_DELTA',x=>{
    x.currentPublic.manifestSha256=x.proposal.manifestSha256;
    x.proposal.baseManifestSha256=x.currentPublic.manifestSha256;
    x.candidateManifestBytes=pretty({
      ...JSON.parse(x.candidateManifestBytes),
      baseArtifactManifestSha256:x.currentPublic.manifestSha256
    });
    x.proposal.manifestSha256=hash(x.candidateManifestBytes);
    x.currentPublic.manifestSha256=x.proposal.manifestSha256;
    x.proposal.baseManifestSha256=x.proposal.manifestSha256;
  });
});
test('fail closed on changed path, internal dotpath, extra secret and missing manifest',()=>{
  rejects('DELTA_CAS_MISMATCH',x=>{x.observedChangedPaths=['site-manifest.json','site/foo.js'];});
  rejects('DECLARED_DELTA_UNSAFE',x=>{x.proposal.changedPaths=['site-manifest.json','site/.github/secrets.js'];});
  rejects('DECLARED_DELTA_UNSAFE',x=>{x.proposal.changedPaths=['site-manifest.json','coordination/private.json'];});
  rejects('DECLARED_DELTA_NO_MANIFEST',x=>{x.proposal.changedPaths=['site/index.html','site/foo.js'];});
  rejects('DECLARED_DELTA_DUP',x=>{x.proposal.changedPaths=['site-manifest.json','site-manifest.json'];});
});
test('reject Writer activation and 06C run or verdict forgery',()=>{
  rejects('WRITER_NOT_OFF',x=>{x.proposal.writer='ON';});
  rejects('QA_RECEIPT_MISMATCH',x=>{x.proposal.qa.verdict='SOURCE_CI_GREEN_ONLY';});
  rejects('QA_RECEIPT_MISMATCH',x=>{x.proposal.qa.headSha=OLD40;});
  rejects('QA_RECEIPT_MISMATCH',x=>{x.proposal.qa.manifestSha256=OLD64;});
  rejects('QA_RUN_NOT_MATCHED',x=>{x.observedRun.conclusion='failure';});
  rejects('QA_RUN_NOT_MATCHED',x=>{x.observedRun.repository='other/repo';});
  rejects('QA_RUN_NOT_MATCHED',x=>{x.observedRun.event='push';});
  rejects('QA_RUN_NOT_MATCHED',x=>{x.observedRun.path='.github/workflows/untrusted-self-qa.yml';});
  rejects('QA_RUN_NOT_MATCHED',x=>{x.observedRun.id=888;});
});
test('fixed manifest hash, source, scope and privacy baseline are exact',()=>{
  rejects('MANIFEST_BYTES_MISMATCH',x=>{x.candidateManifestBytes=Buffer.from('{}\n');});
  rejects('MANIFEST_SCOPE_MISMATCH',x=>{
    const m=JSON.parse(x.candidateManifestBytes);m.writer='ON';
    x.candidateManifestBytes=pretty(m);x.proposal.manifestSha256=hash(x.candidateManifestBytes);
  });
  rejects('MANIFEST_SCOPE_MISMATCH',x=>{
    const m=JSON.parse(x.candidateManifestBytes);m.sourceSha256='f'.repeat(64);
    x.candidateManifestBytes=pretty(m);x.proposal.manifestSha256=hash(x.candidateManifestBytes);
  });
  rejects('MANIFEST_SCOPE_MISMATCH',x=>{
    const m=JSON.parse(x.candidateManifestBytes);m.entries=99;
    x.candidateManifestBytes=pretty(m);x.proposal.manifestSha256=hash(x.candidateManifestBytes);
  });
});
test('strict canonical external metadata rejects duplicate keys and extra JSON whitespace',()=>{
  assert.deepEqual(parseCanonicalJson(pretty({hello:'world'})),{hello:'world'});
  assert.throws(()=>parseCanonicalJson(Buffer.from('{"hello":"a","hello":"b"}\n')),/NONCANONICAL_JSON/);
  assert.throws(()=>parseCanonicalJson(Buffer.from('{"hello":"world"}')),/NONCANONICAL_JSON/);
  assert.throws(()=>parseCanonicalJson(Buffer.from('not-json\n')),/INVALID_JSON/);
});
test('missing or extra provenance fields cannot be silently defaulted',()=>{
  rejects('PROPOSAL_FIELDS',x=>{delete x.proposal.sourceSha256;});
  rejects('PROPOSAL_FIELDS',x=>{x.proposal.silentWriterOverride=true;});
  rejects('QA_RECEIPT_FIELDS',x=>{delete x.proposal.qa.evidenceSha256;});
  rejects('OBSERVED_RUN_FIELDS',x=>{delete x.observedRun.path;});
});
test('no downloads, network, public site, Writer or scope mutation in any successful result',()=>{
  const f=fixture();
  const before=pretty(f);
  const r=run(f);
  assert.deepEqual(pretty(f),before);
  assert.equal(r.kind,'NECESSARY_READ_ONLY_PROMOTION_PREFLIGHT_NOT_RELEASE_ACCEPTANCE');
  assert.ok(r.requiresExternalProof.includes('POSTDEPLOY_INDEPENDENT_PUBLIC_HTTPS'));
  assert.equal(Object.isFrozen(r),true);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';

const workflow=readFileSync(new URL('../.github/workflows/pages-off-repair.yml',import.meta.url),'utf8');
const TARGET='V33-SHELL266-V24-OFF-INVENTORY-UNKNOWN';
const ARTIFACT='6ee52ca29f7e86c8a0dab5ce2ec5f4f36991e4e8';
const MANIFEST='7d1414f1fe198b5716ef163c63f37fb51c563cdf092d0912a014e25d478797cf';
const SOURCE='4433930d727f2032e5f435d3ffec9a9fbbb16b72bce100614e23f2d61e351fdd';
const OLD_TARGET='V33-SHELL266-V24-OFF-COMPACT-RIGHTS';
const OLD_ARTIFACT='6272cd39300a0b83331e4f6d16a9eeface577bec';
const OLD_MANIFEST='dcb084510b49e3a3de5877bcef9fd744268e9021b83fc4524dbca3e0c8abb2c6';
const OLD_SOURCE='e22576fc9d02ef18838615370b28c5a1c32e08942d4064e414caf9c9e0a16304';
const count=(text,needle)=>text.split(needle).length-1;
function cases(){
  const starts=[...workflow.matchAll(/^\s+case "\$TARGET" in\s*$/gm)];
  assert.equal(starts.length,2,'exactly two source allowlist cases');
  return starts.map(m=>{
    const end=workflow.indexOf('\n          esac',m.index);
    assert.ok(end>m.index,'case terminator');
    return workflow.slice(m.index,end+'\n          esac'.length);
  });
}
function run(code,target,artifact,print=false){
  const p=spawnSync('bash',['-euo','pipefail','-c',code+'\n'+(print?'printf "%s,%s" "$expected" "$source"':'printf OK')],{
    encoding:'utf8',env:{...process.env,TARGET:target,ARTIFACT_REF:artifact}
  });
  return p;
}
test('manual dispatch and authority unchanged',()=>{
  assert.match(workflow,/^on:\n  workflow_dispatch:/m);
  assert.doesNotMatch(workflow,/^  (?:push|pull_request|schedule|workflow_run):/m);
  assert.match(workflow,/^permissions:\n  contents: read/m);
  assert.match(workflow,/cancel-in-progress: false/);
  assert.match(workflow,/if: github\.ref == 'refs\/heads\/main'/);
  assert.match(workflow,/path: approved-artifact\/site\b/);
  assert.match(workflow,/nativeSaveWriter[^\n]+OFF_PENDING_FUNCTIONAL_BETA_SAFETY_QA/);
  assert.doesNotMatch(workflow,/secrets\./);
});
test('all six independent new-target controls and unchanged old controls',()=>{
  assert.equal(count(workflow,TARGET),6);
  assert.equal(count(workflow,OLD_TARGET),6);
  assert.equal(count(workflow,'"'+TARGET+'"'),2);
  assert.match(workflow,new RegExp('^          - '+TARGET+'$','m'));
  assert.equal(count(workflow,'m.writer!=="OFF"'),1);
  assert.equal(count(workflow,'?4211:'),1);
  assert.equal(count(workflow,'?73:'),1);
  assert.match(workflow,/m\.webp!==4076/);
  assert.match(workflow,/node scripts\/00-verify-beta-artifact\.mjs approved-artifact\/site approved-artifact\/site-manifest\.json "\$expected"/);
});
test('exact artifact pin, previous rollback and negative cross-target substitution',()=>{
  const block=cases()[0];
  assert.equal(run(block,TARGET,ARTIFACT).status,0);
  assert.notEqual(run(block,TARGET,OLD_ARTIFACT).status,0);
  assert.notEqual(run(block,TARGET,'0'.repeat(40)).status,0);
  assert.equal(run(block,OLD_TARGET,OLD_ARTIFACT).status,0);
  assert.notEqual(run(block,OLD_TARGET,ARTIFACT).status,0);
});
test('manifest and source hashes remain tied to the exact target and cannot be swapped',()=>{
  const block=cases()[1];
  let v=run(block,TARGET,ARTIFACT,true);
  assert.equal(v.status,0,v.stderr);
  assert.equal(v.stdout,MANIFEST+','+SOURCE);
  v=run(block,OLD_TARGET,OLD_ARTIFACT,true);
  assert.equal(v.status,0,v.stderr);
  assert.equal(v.stdout,OLD_MANIFEST+','+OLD_SOURCE);
  assert.notEqual(run(block.replace(MANIFEST,OLD_MANIFEST),TARGET,ARTIFACT,true).stdout,MANIFEST+','+SOURCE);
  assert.notEqual(run(block.replace(SOURCE,OLD_SOURCE),TARGET,ARTIFACT,true).stdout,MANIFEST+','+SOURCE);
});
test('new artifact must be exactly 4214 files, 4076 WebP, 75 modules and Writer OFF',()=>{
  assert.match(workflow,/m\.entries!==\(process\.env\.TARGET==="V33-SHELL266-V24-OFF-INVENTORY-UNKNOWN"\?4214:/);
  assert.match(workflow,/m\.modules!==\(process\.env\.TARGET==="V33-SHELL266-V24-OFF-INVENTORY-UNKNOWN"\?75:/);
  assert.match(workflow,/m\.writer!=="OFF"/);
  assert.doesNotMatch(workflow,/^\s+.*\$\{\{\s*secrets\./m);
});

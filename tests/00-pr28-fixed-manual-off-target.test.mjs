import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';

const workflow=readFileSync(new URL('../.github/workflows/pages-off-repair.yml',import.meta.url),'utf8');
const TARGET='V33-SHELL266-V24-OFF-COMPACT-RIGHTS';
const ARTIFACT='6272cd39300a0b83331e4f6d16a9eeface577bec';
const MANIFEST='dcb084510b49e3a3de5877bcef9fd744268e9021b83fc4524dbca3e0c8abb2c6';
const SOURCE='e22576fc9d02ef18838615370b28c5a1c32e08942d4064e414caf9c9e0a16304';
const OLD_TARGET='V33-SHELL266-V24-OFF-DISABLED-SCOPE';
const OLD_ARTIFACT='7ff318fc6aa08b0b40ce93df8287290b0dbc8260';
const OLD_MANIFEST='dfa3ffbe76adeaf2f422ed78ab9ce4ace1b1b955c2f164d68323009f0a2c4071';
const OLD_SOURCE='b714c187ac94356243eb478e333b13d7a47c9a1ee31667292b50c1f32e5ff04a';
const count=(text,needle)=>text.split(needle).length-1;
const fail=(x)=>{throw Error(x)};
const caseBlocks=(raw)=>{
  const starts=[...raw.matchAll(/^\s+case "\$TARGET" in\s*$/gm)];
  if(starts.length!==2)fail('WRONG_MANUAL_TARGET_CASE_COUNT');
  return starts.map(m=>{
    const end=raw.indexOf('\n          esac',m.index);
    if(end<0)fail('CASE_MISSING_END');
    return raw.slice(m.index,end+String('\n          esac').length);
  });
};
const shell=(script,target,artifact)=>{
  const run=spawnSync('bash',['-euo','pipefail','-c',script],{
    encoding:'utf8',env:{...process.env,TARGET:target,ARTIFACT_REF:artifact}
  });
  return {status:run.status,stdout:run.stdout,stderr:run.stderr};
};
const runCase=(block,target,artifact,print=false)=>
  shell(block+'\n'+(print?'printf "%s,%s" "$expected" "$source"':'printf OK'),target,artifact);

test('manual-only workflow never obtains a new push/release trigger',()=>{
  assert.match(workflow,/^on:\n  workflow_dispatch:/m);
  assert.doesNotMatch(workflow,/^  (?:push|pull_request|schedule|workflow_run):/m);
  assert.match(workflow,/^permissions:\n  contents: read/m);
  assert.match(workflow,/\n  cancel-in-progress: false\n/);
  assert.match(workflow,/if: github\.ref == 'refs\/heads\/main'/);
  assert.match(workflow,/path: approved-artifact\/site\b/);
  assert.match(workflow,/nativeSaveWriter[^\n]+OFF_PENDING_FUNCTIONAL_BETA_SAFETY_QA/);
});
test('new target is exactly present in 6 independent manual allowlist guards',()=>{
  assert.equal(count(workflow,TARGET),6);
  assert.match(workflow,new RegExp('^          - '+TARGET+'$','m'));
  assert.match(workflow,/^\s+\[\[ "\$TARGET" == .+ \]\]$/m);
  assert.equal(count(workflow,'"'+TARGET+'"'),2);
  assert.match(workflow,new RegExp('\\["V33-SHELL266-V24-OFF","'+OLD_TARGET+'","'+TARGET+'"\\]'));
});
test('live shell artifact SHA/ref allowlist rejects any mismatched/new fake request',()=>{
  const block=caseBlocks(workflow)[0];
  assert.equal(runCase(block,TARGET,ARTIFACT).status,0);
  assert.notEqual(runCase(block,TARGET,OLD_ARTIFACT).status,0);
  assert.notEqual(runCase(block,TARGET,'0'.repeat(40)).status,0);
  assert.equal(runCase(block,OLD_TARGET,OLD_ARTIFACT).status,0);
  assert.notEqual(runCase(block,OLD_TARGET,ARTIFACT).status,0);
});
test('manifest and producer source fixed SHA assignments cannot be swapped silently',()=>{
  const block=caseBlocks(workflow)[1];
  const candidate=runCase(block,TARGET,ARTIFACT,true);
  assert.equal(candidate.status,0,candidate.stderr);
  assert.equal(candidate.stdout,MANIFEST+','+SOURCE);
  const previous=runCase(block,OLD_TARGET,OLD_ARTIFACT,true);
  assert.equal(previous.status,0,previous.stderr);
  assert.equal(previous.stdout,OLD_MANIFEST+','+OLD_SOURCE);
  const modified=block.replace(MANIFEST,OLD_MANIFEST);
  assert.notEqual(runCase(modified,TARGET,ARTIFACT,true).stdout,MANIFEST+','+SOURCE);
  const modifiedSource=block.replace(SOURCE,OLD_SOURCE);
  assert.notEqual(runCase(modifiedSource,TARGET,ARTIFACT,true).stdout,MANIFEST+','+SOURCE);
});
test('scope count and Writer OFF private policy stay unchanged',()=>{
  assert.equal(count(workflow,'m.writer!=="OFF"'),1);
  assert.equal(count(workflow,'m.entries!=='),1);
  assert.equal(count(workflow,'m.modules!=='),1);
  assert.equal(count(workflow,'?4211:'),1);
  assert.equal(count(workflow,'?73:'),1);
  assert.match(workflow,/m\.webp!==4076/);
  assert.doesNotMatch(workflow,/\$\{\{\s*secrets\./);
  assert.match(workflow,/node scripts\/00-verify-beta-artifact\.mjs approved-artifact\/site approved-artifact\/site-manifest\.json "\$expected"/);
});

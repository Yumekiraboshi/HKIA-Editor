const V24_PREVIEW=Object.freeze([
  'collection-key1-ticks','collection-key1-add','collection-key1-remove',
  'achievement-timestamp','achievement-progress','puzzle-goals-complete',
  'batch-independent-scalars','collection-recipe-quantity'
]);
const SHELL266_PREVIEW_ONLY=Object.freeze([
  'collection-recipe-expansion-quantity',
  'collection-recipe-expansion23-quantity',
  'collection-recipe-celebration5-quantity'
]);
const SHELL266_SPECIAL_PREVIEW=Object.freeze([
  'batch-family-revoke','achievement-formal49-edit',
  'achievement-manual9-revoke'
]);
const v24=new Set(V24_PREVIEW);
const known=new Set([...V24_PREVIEW,...SHELL266_PREVIEW_ONLY,...SHELL266_SPECIAL_PREVIEW]);

export function createShell266V24StatusView(nativePreview){
  if(!nativePreview||['status','plan','verify','outputStatus'].some(
    key=>typeof nativePreview[key]!=='function'
  ))throw new TypeError('EXISTING_NATIVE_PREVIEW_REQUIRED');

  function status(){
    const live=nativePreview.status();
    if(!live||typeof live!=='object')return live;
    const operations=live.capability?.allowedPreviewOperations;
    const valid=Array.isArray(operations)&&operations.length>0&&
      operations.every(id=>typeof id==='string'&&known.has(id))&&
      new Set(operations).size===operations.length;
    const accepted=valid?operations.filter(id=>v24.has(id)):[];
    return {...live,capability:{
      ...live.capability,
      allowedPreviewOperations:accepted
    }};
  }

  return Object.freeze({
    status,
    plan:request=>nativePreview.plan(request),
    verify:proof=>nativePreview.verify(proof),
    outputStatus:plan=>nativePreview.outputStatus(plan)
  });
}

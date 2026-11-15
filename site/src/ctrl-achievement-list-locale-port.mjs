import {createAchievementListLocaleBinding,projectAchievementListLocale,verifyAchievementListCatalog} from './product-achievement-list-locale.mjs';

                                                                                  
                                                                                             
export function captureAchievementListFacts(input){
 const rows=Object.freeze(input.rows.map(r=>Object.freeze({
  guid:r.guid,title:r.title,kind:r.kind,sourceKnown:r.sourceKnown,complete:r.complete,
  current:r.current,id:r.id,imageEnabled:r.imageEnabled,externalUnknown:r.externalUnknown,
  image:r.image==null?null:Object.freeze({status:r.image.status,image:r.image.image??null,spritePathId:r.image.spritePathId??null})
 })));
 const facts=Object.freeze({rows,selectedGuid:input.selectedGuid,total:input.total,limit:input.limit,empty:input.empty});
 projectAchievementListLocale({...facts,locale:null});
 return facts;
}
export function createProductAchievementListLocalePort(doc){
 const binding=createAchievementListLocaleBinding(doc);
 let live=null,generation=null,watermark=null,invalid=false,busy=false;
 const need=x=>{if(!x)throw Error('PRODUCT_ACH_LIST_LOCALE_PORT');};
 const host=()=>{const all=doc.querySelectorAll('[id="achievementsList"]');need(all.length===1);return all[0];};
 const own=s=>live===s&&s.current()&&s.host.isConnected&&s.host.parentElement===s.parent&&host()===s.host&&s.host.tagName==='DIV'&&s.host.className==='achievement-list'&&s.host.getAttribute('data-hkia-svelte-achievements')==='1';
 const validateGeneration=g=>{
  projectAchievementListLocale({rows:[],selectedGuid:null,total:0,limit:120,empty:'unloaded',locale:g});
  if(g!==null&&watermark!==null)need(g.epoch>watermark.epoch||g.epoch===watermark.epoch&&g.catalog===watermark.catalog);
  return g===null?null:Object.freeze({epoch:g.epoch,catalog:g.catalog});
 };
 function paint(s,g){
  if(busy)return 'LEGACY_RETAINED';busy=true;
  try{need(own(s));const input=Object.freeze({...s.facts,locale:g});return binding.render(s.host,()=>{need(own(s));return input;});}
  catch{return 'LEGACY_RETAINED';}finally{busy=false;}
 }
                                                                        
 function clear(){if(busy)return false;live=null;invalid=false;return true;}
 function invalidate(){if(busy)return false;live=null;invalid=true;return true;}
 function attach(input,current){
  if(busy)return 'LEGACY_RETAINED';
  if(live||typeof current!=='function'){invalidate();return 'LEGACY_RETAINED';}
  try{const h=host(),parent=h.parentElement;need(parent&&h.isConnected&&current()&&h.getAttribute('data-hkia-svelte-achievements')==='1');
   const s=Object.freeze({host:h,parent,facts:captureAchievementListFacts(input),current});
   live=s;invalid=false;const result=paint(s,generation);if(result!=='APPLIED')invalidate();return result;
  }catch{invalidate();return 'LEGACY_RETAINED';}
 }
 function paintLocale(g){
  if(busy||invalid)return 'LEGACY_RETAINED';
  try{const next=validateGeneration(g);if(live&&paint(live,next)!=='APPLIED')return 'LEGACY_RETAINED';
   generation=next;if(next!==null)watermark=next;else if(watermark!==null)watermark=Object.freeze({epoch:watermark.epoch,catalog:null});
   return 'APPLIED';
  }catch{return 'LEGACY_RETAINED';}
 }
 return Object.freeze({verifyAchievementListCatalog,paintLocale,clear,invalidate,attach});
}

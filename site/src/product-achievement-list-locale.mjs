import {verifyCompositeCatalog} from './editor-catalog-composite.mjs';
                                                                                                       
const ja=Object.freeze({'ach.filter.complete':'達成済み','ach.filter.incomplete':'未達成','ach.row.unknownName':'名称未照合・保存済みレコード','ach.row.externalImageUnknown':'外部画像 UNKNOWN','ach.list.more':'さらに表示（残り {count}件）','ach.row.image.label':'実績画像','ach.row.image.unverified':'実績画像：画像未確定','ach.row.image.status':'実績画像：{status}','ach.row.status.missing':'未保存（状態UNKNOWN）','ach.row.aria':'{title}、{status}、進捗 {progress}','ach.row.subtitle.missing':'{guid} · 保存レコードなし','ach.row.subtitle.document':'{guid} · Document {id} · 進捗 {progress}','ach.list.unreadable':'Achievement Domain UNKNOWN：保存済みモデルを認識できません。ゼロ件・未達成とは解釈しません。','ach.list.noMatch':'条件に一致する記録がありません。','ach.list.unloaded':'セーブを読み込むと記録が表示されます。'});
export const ACH_LIST_KEYS=Object.freeze(Object.keys(ja));
const trusted=new WeakSet(),need=x=>{if(!x)throw Error('ACH_LIST_LOCALE_CONTRACT');};
const str=x=>typeof x==='string'&&x.length>0&&x.length<=4096,num=x=>Number.isSafeInteger(x)&&x>=0, own=(o,k)=>Object.hasOwn(o,k);
const path=/^assets\/(?:icons\/[A-Za-z0-9_-]+\.webp|media\/sprites\/[a-f0-9]{2}\/[a-f0-9]{64}\.webp)$/;
const names=s=>[...s.matchAll(/\{([^{}]+)\}/g)].map(x=>x[1]).sort().join('|');
export async function verifyAchievementListCatalog(bytes,locale,sha256){
 const {catalog,digest}=await verifyCompositeCatalog(bytes,locale,sha256);const strings=Object.freeze(Object.fromEntries(ACH_LIST_KEYS.map(k=>{const t=catalog[k];need(str(t)&&names(t)===names(ja[k])&&!/[{}]/.test(t.replace(/\{[^{}]+\}/g,'')));return [k,t];})));
 const c=Object.freeze({locale,sha256:digest,strings});trusted.add(c);return c;
}
function capture(s){
 need(s&&Array.isArray(s.rows)&&num(s.total)&&num(s.limit)&&s.limit>=120&&s.limit<=1200&&s.limit%120===0&&s.rows.length===Math.min(s.total,s.limit)&&(s.selectedGuid===null||str(s.selectedGuid))&&['unloaded','no-match','unreadable'].includes(s.empty));
 const seen=new Set(),rows=s.rows.map(r=>{
  need(r&&str(r.guid)&&!seen.has(r.guid)&&str(r.title)&&['account','slot','slot-missing'].includes(r.kind)&&typeof r.sourceKnown==='boolean'&&(r.complete===null||typeof r.complete==='boolean')&&(r.current===null||str(r.current))&&(r.id===null||str(r.id))&&typeof r.imageEnabled==='boolean'&&typeof r.externalUnknown==='boolean');seen.add(r.guid);
  need(r.kind!=='slot-missing'||r.sourceKnown&&r.complete===null&&r.current===null&&r.id===null);need(r.kind!=='slot'||r.id!==null);
  const i=r.image;need(i==null||i&&str(i.status)&&(i.image==null||typeof i.image==='string')&&(i.spritePathId==null||typeof i.spritePathId==='string'));
  return Object.freeze({guid:r.guid,title:r.title,kind:r.kind,sourceKnown:r.sourceKnown,complete:r.complete,current:r.current,id:r.id,imageEnabled:r.imageEnabled,externalUnknown:r.externalUnknown,image:i?Object.freeze({status:i.status,image:i.image??null,spritePathId:i.spritePathId??null}):null});
 });
 const l=s.locale;need(l===null||l&&num(l.epoch)&&trusted.has(l.catalog));return Object.freeze({rows:Object.freeze(rows),selectedGuid:s.selectedGuid,total:s.total,limit:s.limit,empty:s.empty,locale:l===null?null:Object.freeze({epoch:l.epoch,catalog:l.catalog})});
}
const same=(a,b)=>a.selectedGuid===b.selectedGuid&&a.total===b.total&&a.limit===b.limit&&a.empty===b.empty&&JSON.stringify(a.rows)===JSON.stringify(b.rows)&&(a.locale===null?b.locale===null:b.locale!==null&&a.locale.epoch===b.locale.epoch&&a.locale.catalog===b.locale.catalog);
function project(s){
 const lang=s.locale?.catalog.locale??null,strings=s.locale?.catalog.strings??ja,t=(k,args={})=>strings[k].replace(/\{([^{}]+)\}/g,(_,n)=>{need(own(args,n));return String(args[n]);});
 const rows=s.rows.map(r=>{
  const missing=r.kind==='slot-missing',unknown=!r.sourceKnown,done=r.complete===true,status=missing?t('ach.row.status.missing'):done?t('ach.filter.complete'):r.complete===false?t('ach.filter.incomplete'):'UNKNOWN';
  const i=r.image,raw=i?.status??'NOT_IN_SOURCE_MAP',known=!!i&&['EXACT','EXISTING_VERIFIED'].includes(raw)&&typeof i.image==='string'&&path.test(i.image)&&typeof i.spritePathId==='string'&&i.spritePathId.length>0,istatus=known?raw:['EXACT','EXISTING_VERIFIED'].includes(raw)?'UNKNOWN':raw;
  return Object.freeze({guid:r.guid,title:r.title,missing,unknown,done,status,aria:t('ach.row.aria',{title:r.title,status,progress:r.current??'UNKNOWN'}),subtitle:r.kind==='account'?r.guid:missing?t('ach.row.subtitle.missing',{guid:r.guid}):t('ach.row.subtitle.document',{guid:r.guid,id:r.id,progress:String(r.current)}),unknownName:unknown?t('ach.row.unknownName'):null,external:r.kind==='account'&&r.externalUnknown?t('ach.row.externalImageUnknown'):null,image:r.imageEnabled?Object.freeze({status:istatus,src:known?'./'+i.image:null,spritePathId:known?i.spritePathId:null,label:known?t('ach.row.image.label'):t('ach.row.image.unverified'),title:known?t('ach.row.image.label'):t('ach.row.image.status',{status:istatus}),failedLabel:t('ach.row.image.unverified'),failedTitle:t('ach.row.image.status',{status:'LOAD_FAILED'})}):null});
 });
 const empty=t(s.empty==='unreadable'?'ach.list.unreadable':s.empty==='no-match'?'ach.list.noMatch':'ach.list.unloaded');
 return Object.freeze({lang,rows:Object.freeze(rows),empty,more:s.total>s.limit?t('ach.list.more',{count:lang===null?String(s.total-s.limit):new Intl.NumberFormat(lang).format(s.total-s.limit)}):null});
}
export function projectAchievementListLocale(input){return project(capture(input));}
                                                                                   
export function createAchievementListLocaleBinding(doc){
 let busy=false,watermark=null;const witnesses=new WeakMap();
 const owns=h=>h?.tagName==='DIV'&&h.id==='achievementsList'&&h.className==='achievement-list'&&h.getAttribute('data-hkia-svelte-achievements')==='1'&&h.isConnected&&doc.querySelectorAll('[id="achievementsList"]').length===1&&doc.querySelectorAll('[id="achievementsList"]')[0]===h;
 const nodesEqual=(a,b)=>a.length===b.length&&a.every((n,i)=>n===b[i]);
 const val=s=>s.key===null?s.node.data:s.node.getAttribute(s.key);
 const put=(s,v)=>{if(s.key===null)s.node.data=v;else if(v===null)s.node.removeAttribute(s.key);else s.node.setAttribute(s.key,v);};
 const classes=(e,w)=>e.className.split(/\s+/).filter(Boolean).sort().join(' ')===w.filter(Boolean).sort().join(' ');
 function inspect(host,input,p){
  const kids=[...host.children],slots=[],nodes=[...kids],images=[];need(kids.length===(input.rows.length||1)+Number(p.more!==null));
  const leaf=(e,tag,cls,expected,localized=false)=>{need(e?.tagName===tag&&e.className===cls&&e.childNodes.length===1&&e.firstChild.nodeType===3);nodes.push(e,e.firstChild);if(localized)slots.push({node:e.firstChild,key:null,expected});else need(e.firstChild.data===expected);};
  const attr=(e,key,expected,im=null)=>slots.push({node:e,key,expected,im});
  if(!input.rows.length)leaf(kids[0],'P','placeholder',p.empty,true);
  input.rows.forEach((r,i)=>{
   const b=kids[i],q=p.rows[i],c=[...b.children];need(b.tagName==='BUTTON'&&b.type==='button'&&!b.disabled&&classes(b,['achievement-row',r.guid===input.selectedGuid?'selected':'',q.missing?'missing-record':'',q.unknown?'unknown-identity':''])&&b.getAttribute('data-achievement-guid')===r.guid&&c.length===3);
   attr(b,'aria-label',q.aria);const [image,body,dot]=c;nodes.push(image,body,dot);
   if(q.image){const m=q.image,st=image.getAttribute('data-image-status');need(image.tagName==='SPAN'&&image.className==='media-thumb media-achievement'&&image.getAttribute('data-image-kind')==='achievement'&&image.children.length===1&&(st===m.status||m.src&&st==='LOAD_FAILED'));const child=image.children[0],failed=!!m.src&&st==='LOAD_FAILED';
    if(m.src&&!failed)need(child.tagName==='IMG'&&child.getAttribute('src')===m.src&&child.getAttribute('data-sprite-path-id')===m.spritePathId&&child.getAttribute('alt')===''&&child.getAttribute('width')==='40'&&child.getAttribute('height')==='40'&&child.getAttribute('loading')==='lazy'&&child.getAttribute('decoding')==='async'&&child.getAttribute('referrerpolicy')==='no-referrer');
    else need(child.tagName==='SPAN'&&child.className==='media-null-mark'&&child.textContent==='—'&&child.getAttribute('aria-hidden')==='true');
    const im={node:image,child,failed,src:m.src};images.push(im);attr(image,'aria-label',failed?m.failedLabel:m.label,im);attr(image,'title',failed?m.failedTitle:m.title,im);
   }else{need(image.tagName==='DIV'&&classes(image,['ach-symbol',q.done?'done':''])&&image.textContent===(q.done?'✓':'☆'));images.push(null);}
   need(body.tagName==='DIV'&&body.className==='ach-text');const txt=[...body.children];let z=0;leaf(txt[z++],'STRONG','',q.title);leaf(txt[z++],'SMALL','',q.subtitle,r.kind!=='account');if(q.unknownName!==null)leaf(txt[z++],'SMALL','unknown-tag',q.unknownName,true);if(q.external!==null)leaf(txt[z++],'SMALL','media-caption',q.external,true);need(z===txt.length);
   leaf(dot,'SPAN',q.done?'status-dot complete':'status-dot',q.status,true);
  });
  if(p.more!==null){const b=kids.at(-1);leaf(b,'BUTTON','btn-secondary show-more',p.more,true);need(b.type==='button'&&!b.disabled);}
  return {kids,slots,nodes,images};
 }
 const sameImages=(a,b,allowFailure=false)=>a.length===b.length&&a.every((x,i)=>{const y=b[i];return x===null?y===null:y!==null&&x.node===y.node&&x.src===y.src&&(x.child===y.child&&x.failed===y.failed||allowFailure&&x.src&&!x.failed&&y.failed&&x.child.tagName==='IMG'&&y.child.tagName==='SPAN');});
 function render(host,read){
  if(busy||!owns(host)||typeof read!=='function')return 'LEGACY_RETAINED';busy=true;const parent=host.parentElement,journal=[];
  const chain=n=>{const p=[];for(;n&&n!==host;n=n.parentNode)p.push([n,n.parentNode]);need(p.length&&p.at(-1)[1]===host);return p;};
  const still=s=>host.isConnected&&host.parentElement===parent&&host.getAttribute('data-hkia-svelte-achievements')==='1'&&s.path.every(([n,p])=>n.parentNode===p);
  try{
   const input=capture(read()),desired=project(input),base=Object.freeze({...input,locale:null}),old=witnesses.get(host);
   if(input.locale&&watermark)need(input.locale.epoch>watermark.epoch||input.locale.epoch===watermark.epoch&&input.locale.catalog===watermark.catalog);
   const next=inspect(host,input,desired),sameRows=old&&nodesEqual(old.kids,next.kids);
   if(sameRows)need(same({...old.input,locale:null},base)&&nodesEqual(old.nodes,next.nodes)&&sameImages(old.images,next.images,true));
   const prior=inspect(host,input,sameRows?old.projection:project(base)),initial=inspect(host,input,project(base));
   if(sameRows)need(prior.slots.length===old.slots.length&&prior.slots.every((s,i)=>s.node===old.slots[i].node&&s.key===old.slots[i].key));
   need(prior.slots.every((s,i)=>val(s)===s.expected||sameRows&&s.im&&s.im.failed&&old.images.find(x=>x?.node===s.im.node)?.failed===false&&val(s)===initial.slots[i].expected));
   const writes=next.slots.map(s=>({...s,actual:val(s),path:chain(s.node)}));
   const before=inspect(host,input,desired);need(owns(host)&&same(capture(read()),input)&&nodesEqual(before.nodes,next.nodes)&&sameImages(before.images,next.images)&&writes.every(s=>val(s)===s.actual));
   for(const s of writes){if(s.actual===s.expected)continue;need(owns(host)&&still(s)&&val(s)===s.actual);journal.push(s);put(s,s.expected);}
   const after=inspect(host,input,desired);need(owns(host)&&same(capture(read()),input)&&nodesEqual(after.nodes,next.nodes)&&sameImages(after.images,next.images)&&after.slots.every(s=>val(s)===s.expected));
   witnesses.set(host,{...after,input,projection:desired});if(input.locale)watermark=input.locale;else if(watermark)watermark={epoch:watermark.epoch,catalog:null};return 'APPLIED';
  }catch{for(const s of journal.reverse()){try{if(still(s)&&val(s)===s.expected)put(s,s.actual);}catch{}}return 'LEGACY_RETAINED';}finally{busy=false;}
 }
 return Object.freeze({render});
}

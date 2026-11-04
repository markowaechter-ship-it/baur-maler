(() => {
 const main=document.querySelector('main'),header=document.querySelector('header');if(!main||!header)return;
 let deck=main.querySelector('.chapter-deck');
 if(!deck){
  deck=document.createElement('div');deck.className='chapter-deck';
  const stage=document.createElement('div');stage.className='chapter-stage';
  const sections=[...main.children];const footer=document.querySelector('body>footer');if(footer)sections.push(footer);
  sections.forEach((section,i)=>{const card=document.createElement('div');card.className='chapter-card';card.dataset.chapter=i;card.dataset.title=section.tagName==='FOOTER'?'Info':section.querySelector('h1,h2,h3')?.textContent.trim()||'Kontakt';card.append(section);stage.append(card);});deck.append(stage);main.append(deck);
 }
 const stage=deck.querySelector('.chapter-stage'),cards=[...stage.querySelectorAll(':scope>[data-chapter]')];if(!cards.length)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const isHome=!!main.querySelector('.paint-hero'),labels=cards.map(card=>card.dataset.title||card.getAttribute('aria-label')||'Abschnitt');
 const paths=[
  '<path d="m3 10 9-7 9 7v10H15v-7H9v7H3z"/>',
  '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  '<path d="M4 4h16v6H4zM20 7h2v7H12v7"/>',
  '<path d="M5 5h14M5 12h14M5 19h14"/><circle cx="3" cy="5" r="1"/><circle cx="3" cy="12" r="1"/><circle cx="3" cy="19" r="1"/>',
  '<path d="M20 3C8 2 2 8 5 15s14 4 15-12ZM5 20 16 8"/>',
  '<path d="M3 5h18v12H9l-5 4v-4H3zM7 9h10M7 13h7"/>',
  '<circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 1 1 4 3c-1 0-1 1-1 3M12 17v1"/>',
  '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  '<circle cx="12" cy="12" r="9"/><path d="M12 10v7M12 6v1"/>'
 ];
 const nav=document.createElement('nav');nav.className='chapter-nav';nav.setAttribute('aria-label','Sektionen wechseln');
 const buttons=cards.map((card,i)=>{
  const button=document.createElement('button');button.type='button';button.dataset.chapterGo=i;button.setAttribute('aria-label',labels[i]);
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.6');svg.setAttribute('aria-hidden','true');svg.innerHTML=paths[isHome?i:Math.min(i,8)];
  const label=document.createElement('span');label.textContent=labels[i];button.append(svg,label);nav.append(button);return button;
 });
 const meter=document.createElement('div');meter.className='chapter-meter';meter.setAttribute('aria-hidden','true');meter.innerHTML='<span></span><i><b></b></i>';
 const controls=document.createElement('div');controls.className='chapter-actions';controls.innerHTML='<button type="button" class="chapter-prev" aria-label="Vorherige Karte">←</button><button type="button" class="chapter-forward" aria-label="Nächste Karte">→</button>';
 const status=document.createElement('p');status.className='chapter-announcement';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 document.body.append(nav,meter,controls,status);
 // Full text is available in a paginated reader, never by scrolling the page vertically.
 const reader=document.createElement('dialog');reader.className='chapter-reader';reader.setAttribute('aria-label','Vollständigen Inhalt lesen');
 reader.innerHTML='<div class="reader-top"><strong></strong><button type="button" class="reader-close" aria-label="Lesefenster schliessen">×</button></div><div class="reader-window"><div class="reader-flow"></div></div><div class="reader-controls"><button type="button" class="reader-prev" aria-label="Vorherige Textseite">←</button><span role="status"></span><button type="button" class="reader-next" aria-label="Nächste Textseite">→</button></div>';
 document.body.append(reader);
 const readerView=reader.querySelector('.reader-window'),flow=reader.querySelector('.reader-flow');let readerIndex=0,readerCount=1,readerStep=1,readerReturn=null;
 const setReaderPage=n=>{readerIndex=Math.max(0,Math.min(readerCount-1,n));readerView.scrollLeft=readerIndex*readerStep;reader.querySelector('.reader-controls span').textContent=`${readerIndex+1} von ${readerCount}`;reader.querySelector('.reader-prev').disabled=readerIndex===0;reader.querySelector('.reader-next').disabled=readerIndex===readerCount-1;};
 const measureReader=()=>{if(!reader.open)return;readerStep=readerView.clientWidth+32;readerCount=Math.max(1,Math.ceil((flow.scrollWidth+32)/readerStep));setReaderPage(readerIndex);};
 const openReader=(source,title)=>{
  readerReturn=document.activeElement;flow.replaceChildren();
  const nodes=[...source.querySelectorAll('h1,h2,h3,h4,p,blockquote,summary,li')].filter(node=>!node.closest('.paint-tools,.heritage-controls,.chapter-tools')&&!node.parentElement.closest('blockquote,li'));
  nodes.forEach(node=>{const copy=document.createElement(/^H/.test(node.tagName)?'h3':'p');copy.textContent=node.textContent.trim();if(copy.textContent)flow.append(copy);});
  if(!nodes.length){const paragraph=document.createElement('p');paragraph.textContent=source.textContent.trim();flow.append(paragraph);}
  reader.querySelector('.reader-top strong').textContent=title;readerIndex=0;reader.showModal();requestAnimationFrame(measureReader);
 };
 reader.querySelector('.reader-close').addEventListener('click',()=>reader.close());reader.addEventListener('close',()=>readerReturn?.focus({preventScroll:true}));
 reader.querySelector('.reader-prev').addEventListener('click',()=>setReaderPage(readerIndex-1));reader.querySelector('.reader-next').addEventListener('click',()=>setReaderPage(readerIndex+1));
 reader.addEventListener('click',event=>{if(event.target===reader)reader.close();});
 cards.forEach((card,i)=>{
  const content=card.firstElementChild;content.setAttribute('tabindex','-1');
  const read=document.createElement('button');read.type='button';read.className='chapter-read';read.textContent='Inhalt lesen ↗';read.addEventListener('click',()=>openReader(content,labels[i]));card.append(read);
  card.querySelectorAll('.heritage-event').forEach(event=>{const button=document.createElement('button');button.type='button';button.className='heritage-read';button.textContent='Station lesen ↗';button.addEventListener('click',()=>openReader(event,event.querySelector('.heritage-year').textContent));event.append(button);});
 });
 let index=0,busy=false,animation=0,wheelSum=0,wheelConsumed=false,lastWheel=0,touch=null;
 const prev=controls.querySelector('.chapter-prev'),next=controls.querySelector('.chapter-forward');
 const activeContent=()=>cards[index].firstElementChild;
 const cardStyle=(card,transform,opacity,z)=>{card.style.setProperty('--card-transform',transform);card.style.setProperty('--card-opacity',opacity);card.style.zIndex=z;};
 const measure=()=>{
  const top=header.getBoundingClientRect().height+12;document.documentElement.style.setProperty('--chapter-top',`${top}px`);
  cards.forEach(card=>{const content=card.firstElementChild;card.classList.toggle('has-overflow',content.scrollHeight>content.clientHeight+5);});measureReader();
 };
 const finish=(n,focus)=>{
  index=n;busy=false;animation=0;
  cards.forEach((card,i)=>{card.style.willChange='auto';card.inert=i!==index;card.setAttribute('aria-hidden',String(i!==index));cardStyle(card,i===index?'translate3d(0,0,0) scale(1)':'translate3d(0,22px,0) scale(.96)',i===index?'1':'0',i===index?'2':'0');});
  buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));prev.disabled=index===0;next.disabled=index===cards.length-1;
  meter.querySelector('span').textContent=`${index+1} von ${cards.length}`;meter.querySelector('b').style.transform=`translateY(${cards.length>1?index/(cards.length-1)*120:0}px)`;
  status.textContent=`${index+1} von ${cards.length}: ${labels[index]}`;
  cards[index].firstElementChild.dispatchEvent(new Event('chapteractivate'));
  if(focus)activeContent().focus({preventScroll:true});
  const button=buttons[index];nav.scrollTo({left:Math.max(0,button.offsetLeft-nav.clientWidth/2+button.offsetWidth/2),behavior:reduced.matches?'instant':'smooth'});
  requestAnimationFrame(measure);
 };
 const go=(n,focus=true)=>{
  n=Math.max(0,Math.min(cards.length-1,n));if(n===index||busy)return;
  document.dispatchEvent(new Event('chapterbeforechange'));
  if(reduced.matches){finish(n,focus);return;}
  busy=true;const old=cards[index],incoming=cards[n],forward=n>index;
  old.style.willChange='transform, opacity';incoming.style.willChange='transform, opacity';
  old.inert=true;incoming.inert=true;old.setAttribute('aria-hidden','true');incoming.setAttribute('aria-hidden','true');
  const start=performance.now(),duration=700;
  const animate=time=>{
   const p=Math.min(1,(time-start)/duration),t=p*p*(3-2*p);
   if(forward){cardStyle(old,`translate3d(0,${-t*118}%,0) rotateX(${t*16}deg) scale(${1-t*.05})`,String(1-Math.max(0,(p-.8)/.2)),'3');cardStyle(incoming,`translate3d(0,${22*(1-t)}px,0) scale(${.96+.04*t})`,'1','2');}
   else{cardStyle(old,`translate3d(0,${22*t}px,0) scale(${1-t*.04})`,'1','2');cardStyle(incoming,`translate3d(0,${-118*(1-t)}%,0) rotateX(${16*(1-t)}deg) scale(${.95+.05*t})`,String(Math.min(1,p*6)),'3');}
   if(p<1)animation=requestAnimationFrame(animate);else finish(n,focus);
  };animation=requestAnimationFrame(animate);
 };
 buttons.forEach((button,i)=>button.addEventListener('click',()=>go(i)));prev.addEventListener('click',()=>go(index-1));next.addEventListener('click',()=>go(index+1));
 // A gesture flips exactly one card; trackpad momentum cannot skip several sections.
 addEventListener('wheel',event=>{
  if(event.ctrlKey||event.target.closest('textarea,select,input,[data-preserve-wheel]'))return;
  if(Math.abs(event.deltaX)>Math.abs(event.deltaY)||event.shiftKey)return;
  if(reader.open){event.preventDefault();return;}
  event.preventDefault();const now=performance.now();if(now-lastWheel>180){wheelSum=0;wheelConsumed=false;}lastWheel=now;
  if(busy||wheelConsumed)return;wheelSum+=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
  if(Math.abs(wheelSum)>55){wheelConsumed=true;go(index+Math.sign(wheelSum),false);}
 },{passive:false});
 addEventListener('keydown',event=>{
  if(event.altKey||event.ctrlKey||event.metaKey||event.target.closest('input,textarea,select,[contenteditable="true"]'))return;
  if(reader.open){if(event.key==='ArrowRight'){event.preventDefault();setReaderPage(readerIndex+1);}if(event.key==='ArrowLeft'){event.preventDefault();setReaderPage(readerIndex-1);}return;}
  if((event.key===' '||event.key==='Enter')&&event.target.closest('button,a,summary'))return;
  const delta=event.key==='PageDown'||event.key==='ArrowDown'||event.key===' '?1:event.key==='PageUp'||event.key==='ArrowUp'?-1:0;
  if(delta){event.preventDefault();go(index+delta);}else if(event.key==='Home'&&!event.target.closest('.heritage-rail')){event.preventDefault();go(0);}else if(event.key==='End'&&!event.target.closest('.heritage-rail')){event.preventDefault();go(cards.length-1);}
 });
 addEventListener('touchstart',event=>{if(event.touches.length!==1||event.target.closest('input,textarea,select,button,a,summary')||reader.open){touch=null;return;}touch={x:event.touches[0].clientX,y:event.touches[0].clientY};},{passive:true});
 addEventListener('touchend',event=>{if(!touch||!event.changedTouches.length)return;const dx=event.changedTouches[0].clientX-touch.x,dy=event.changedTouches[0].clientY-touch.y;touch=null;if(Math.abs(dy)>45&&Math.abs(dy)>Math.abs(dx)*1.15)go(index+(dy<0?1:-1),false);},{passive:true});
 main.querySelectorAll('details').forEach(details=>details.addEventListener('toggle',()=>{if(details.open){measure();if(details.closest('.chapter-card').classList.contains('has-overflow')){openReader(details,details.querySelector('summary').textContent);details.open=false;}}}));
 document.addEventListener('click',event=>{
  const a=event.target.closest('a');if(!a||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const url=new URL(a.href,location.href);if(url.origin!==location.origin||url.pathname!==location.pathname||!url.hash)return;
  let id;try{id=decodeURIComponent(url.hash.slice(1));}catch{return;}
  const target=document.getElementById(id);if(!target)return;
  if(target===main){event.preventDefault();activeContent().focus({preventScroll:true});return;}
  const card=target.closest('.chapter-card');const n=cards.indexOf(card);if(n>=0){event.preventDefault();go(n);}
 });
 if(isHome){
  document.addEventListener('click',event=>{
   const a=event.target.closest('a');if(!a||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||a.target==='_blank')return;
   const url=new URL(a.href,location.href);if(url.origin!==location.origin||a.hasAttribute('download'))return;
   const route=url.pathname.replace(/\/$/,'')||'/';
   if(route==='/leistungen'&&a.closest('#leistungen'))return;
   if(route==='/nachhaltigkeit'&&a.closest('.original-eco'))return;
   const map={'/':0,'/leistungen':2,'/nachhaltigkeit':4,'/kontakt':7};let target=url.hash==='#leistungen'?2:map[route];
   if(url.hash&&url.hash!=='#leistungen')return;
   if(target!==undefined){event.preventDefault();go(target);closeMenuIfNeeded();}
  });
 }
 const closeMenuIfNeeded=()=>{document.querySelector('#navigation')?.classList.remove('open');document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');};
 document.body.classList.add('chapter-fixed');scrollTo(0,0);finish(0,false);
 addEventListener('resize',measure,{passive:true});new ResizeObserver(measure).observe(header);
 document.querySelectorAll('img').forEach(image=>image.addEventListener('load',measure,{once:true}));
 if(document.fonts)document.fonts.ready.then(measure);measure();
})();

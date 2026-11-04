(() => {
 const gallery=document.querySelector('.services-gallery');if(!gallery)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 document.addEventListener('keydown',event=>{if(event.key==='Tab'||event.key.startsWith('Arrow'))document.documentElement.classList.add('keyboard-input');});
 document.addEventListener('pointerdown',()=>document.documentElement.classList.remove('keyboard-input'),{passive:true});
 const panels=[...gallery.querySelectorAll('[data-service]')];
 const carouselPrevious=document.querySelector('.service-carousel-prev'),carouselNext=document.querySelector('.service-carousel-next'),carouselStatus=document.querySelector('.service-carousel-status');
 let suppressOpen=false,drag=null,carouselFrame=0;
 const stride=()=>panels.length>1?panels[1].getBoundingClientRect().left-panels[0].getBoundingClientRect().left:gallery.clientWidth;
 const updateCarousel=()=>{
  carouselFrame=0;const step=stride();if(!step)return;
  const first=Math.min(panels.length-1,Math.round(gallery.scrollLeft/step));
  const visible=Math.max(1,Math.round(gallery.clientWidth/step)),last=Math.min(panels.length,first+visible);
  carouselPrevious.disabled=gallery.scrollLeft<=2;carouselNext.disabled=gallery.scrollLeft>=gallery.scrollWidth-gallery.clientWidth-2;
  carouselStatus.textContent=visible===1?`${first+1} / ${panels.length}`:`${first+1}–${last} / ${panels.length}`;
 };
 const moveCarousel=direction=>gallery.scrollTo({left:Math.max(0,Math.round(gallery.scrollLeft/stride())+direction)*stride(),behavior:reduced.matches?'instant':'smooth'});
 carouselPrevious.addEventListener('click',()=>moveCarousel(-1));carouselNext.addEventListener('click',()=>moveCarousel(1));
 gallery.addEventListener('scroll',()=>{if(!carouselFrame)carouselFrame=requestAnimationFrame(updateCarousel);},{passive:true});
 gallery.addEventListener('keydown',event=>{
  if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return;
  event.preventDefault();event.stopPropagation();const i=panels.indexOf(document.activeElement),n=Math.max(0,Math.min(panels.length-1,i+(event.key==='ArrowRight'?1:-1)));
  panels[n].focus({preventScroll:true});gallery.scrollTo({left:n*stride(),behavior:reduced.matches?'instant':'smooth'});
 });
 gallery.addEventListener('pointerdown',event=>{
  if(event.pointerType!=='mouse'||event.button!==0)return;
  suppressOpen=false;drag={id:event.pointerId,x:event.clientX,left:gallery.scrollLeft,moved:false};
 });
 gallery.addEventListener('pointermove',event=>{
  if(!drag||event.pointerId!==drag.id)return;
  const dx=event.clientX-drag.x;
  if(!drag.moved&&Math.abs(dx)>8){drag.moved=true;suppressOpen=true;gallery.setPointerCapture(event.pointerId);gallery.classList.add('is-dragging');}
  if(drag.moved){event.preventDefault();gallery.scrollLeft=drag.left-dx;}
 });
 const endDrag=event=>{
  if(!drag||event.pointerId!==drag.id)return;
  const moved=drag.moved;drag=null;gallery.classList.remove('is-dragging');
  if(gallery.hasPointerCapture(event.pointerId))gallery.releasePointerCapture(event.pointerId);
  if(moved)gallery.scrollTo({left:Math.round(gallery.scrollLeft/stride())*stride(),behavior:reduced.matches?'instant':'smooth'});
 };
 gallery.addEventListener('pointerup',endDrag);gallery.addEventListener('pointercancel',endDrag);
 gallery.addEventListener('click',event=>{if(suppressOpen){event.preventDefault();event.stopImmediatePropagation();suppressOpen=false;}},true);
 new ResizeObserver(updateCarousel).observe(gallery);updateCarousel();

 const dialog=document.createElement('dialog');dialog.className='service-detail';dialog.setAttribute('aria-labelledby','service-detail-title');
 dialog.innerHTML='<div class="service-spin"><div class="service-face service-front" aria-hidden="true"></div><div class="service-face service-back"><div class="service-detail-heading"><div><p class="service-detail-label">Unsere Leistungen</p><h2 id="service-detail-title"></h2></div><button class="service-close" type="button" aria-label="Karte zurückdrehen">×</button></div><div class="service-pages"><div class="service-text"></div></div><div class="service-detail-footer"><div class="service-pagination"><button class="service-page-prev" type="button" aria-label="Vorherige Textseite">←</button><span aria-live="polite"></span><button class="service-page-next" type="button" aria-label="Nächste Textseite">→</button></div><button class="service-enquire" type="button">Projekt besprechen ↗</button></div></div></div>';
 document.body.append(dialog);
 const spin=dialog.querySelector('.service-spin'),front=dialog.querySelector('.service-front'),back=dialog.querySelector('.service-back'),view=dialog.querySelector('.service-pages'),flow=dialog.querySelector('.service-text');
 let source=null,backgroundCard=null,motion=null,closing=false,page=0,count=1,step=1;
 const goPage=n=>{page=Math.max(0,Math.min(count-1,n));view.scrollLeft=page*step;dialog.querySelector('.service-pagination span').textContent=`${page+1} / ${count}`;dialog.querySelector('.service-page-prev').disabled=page===0;dialog.querySelector('.service-page-next').disabled=page===count-1;};
 const measure=()=>{if(!dialog.open)return;step=view.clientWidth+36;count=Math.max(1,Math.ceil((flow.scrollWidth+36)/step));goPage(page);};
 // Keep desktop detail cards within one third of the main section card.
 const fitWidth=()=>{
  if(!dialog.open||closing)return;
  const sectionWidth=source.closest('.chapter-card').getBoundingClientRect().width;
  const width=innerWidth>760?Math.min(sectionWidth*.33,innerWidth-64):innerWidth-24;
  dialog.style.width=`${Math.floor(width)}px`;
  measure();
 };
 const origin=()=>{const a=source.getBoundingClientRect(),b=dialog.getBoundingClientRect();return `translate3d(${a.left+a.width/2-b.left-b.width/2}px,${a.top+a.height/2-b.top-b.height/2}px,0) rotateY(0deg)`;};
 const open=button=>{
  if(dialog.open)return;
  source=button;source.setAttribute('aria-expanded','true');source.style.visibility='hidden';
  front.className=`service-face service-front ${button.className}`;front.innerHTML=button.innerHTML;
  const rect=button.getBoundingClientRect(),style=getComputedStyle(button);
  front.style.width=`${rect.width}px`;front.style.height=`${rect.height}px`;
  front.style.padding=style.padding;front.style.borderRadius=style.borderRadius;
  front.querySelector('h3').style.fontSize=getComputedStyle(button.querySelector('h3')).fontSize;
  back.style.background=getComputedStyle(button).backgroundColor;
  dialog.querySelector('h2').textContent=button.querySelector('h3').textContent;
  flow.replaceChildren(document.querySelector(`#service-info-${button.dataset.service}`).content.cloneNode(true));
  page=0;dialog.showModal();fitWidth();
  dialog.classList.add('service-is-open');
  backgroundCard=button.closest('.chapter-card');backgroundCard?.classList.add('service-background-blurred');
  spin.style.transform='rotateY(180deg)';
  motion=spin.animate([{transform:origin()},{transform:'translate3d(0,0,0) rotateY(180deg)'}],{duration:reduced.matches?0:1000,easing:'cubic-bezier(.22,.65,.18,1)'});
  motion.finished.then(()=>{motion=null;dialog.querySelector('.service-close').focus({preventScroll:true});},()=>{});
 };
 const close=()=>{
  if(!dialog.open||closing)return;
  closing=true;dialog.classList.remove('service-is-open');backgroundCard?.classList.remove('service-background-blurred');const current=getComputedStyle(spin).transform;motion?.cancel();
  motion=spin.animate([{transform:current},{transform:origin()}],{duration:reduced.matches?0:850,easing:'cubic-bezier(.3,.55,.18,1)',fill:'both'});
  motion.finished.then(()=>{dialog.close();motion.cancel();motion=null;closing=false;source.style.visibility='';source.setAttribute('aria-expanded','false');source.focus({preventScroll:true});});
 };
 gallery.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>open(button)));
 dialog.addEventListener('close',()=>{dialog.classList.remove('service-is-open');backgroundCard?.classList.remove('service-background-blurred');});
 dialog.querySelector('.service-close').addEventListener('click',close);
 dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 dialog.addEventListener('click',event=>{if(event.target.closest('button,a')||String(getSelection()).length)return;close();});
 dialog.querySelector('.service-page-prev').addEventListener('click',()=>goPage(page-1));dialog.querySelector('.service-page-next').addEventListener('click',()=>goPage(page+1));
 dialog.querySelector('.service-enquire').addEventListener('click',()=>{close();const next=()=>{if(dialog.open){requestAnimationFrame(next);return;}document.querySelector('[data-chapter-go="7"]')?.click();};requestAnimationFrame(next);});
 dialog.addEventListener('wheel',event=>{event.preventDefault();event.stopPropagation();},{passive:false});
 dialog.addEventListener('keydown',event=>{event.stopPropagation();if(event.key==='ArrowLeft'){event.preventDefault();goPage(page-1);}if(event.key==='ArrowRight'){event.preventDefault();goPage(page+1);}});
 // Keep vertical gestures inside the detail card from turning the whole section.
 dialog.addEventListener('touchstart',event=>event.stopPropagation(),{passive:true});dialog.addEventListener('touchend',event=>event.stopPropagation(),{passive:true});
 new ResizeObserver(measure).observe(view);
 addEventListener('resize',fitWidth,{passive:true});
})();

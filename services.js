(() => {
 const gallery=document.querySelector('.services-gallery');if(!gallery)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const dialog=document.createElement('dialog');dialog.className='service-detail';dialog.setAttribute('aria-labelledby','service-detail-title');
 dialog.innerHTML='<div class="service-spin"><div class="service-face service-front" aria-hidden="true"></div><div class="service-face service-back"><div class="service-detail-heading"><div><p class="service-detail-label">Unsere Leistungen</p><h2 id="service-detail-title"></h2></div><button class="service-close" type="button" aria-label="Karte zurückdrehen">×</button></div><div class="service-pages"><div class="service-text"></div></div><div class="service-detail-footer"><div class="service-pagination"><button class="service-page-prev" type="button" aria-label="Vorherige Textseite">←</button><span aria-live="polite"></span><button class="service-page-next" type="button" aria-label="Nächste Textseite">→</button></div><button class="service-enquire" type="button">Projekt besprechen ↗</button></div></div></div>';
 document.body.append(dialog);
 const spin=dialog.querySelector('.service-spin'),front=dialog.querySelector('.service-front'),back=dialog.querySelector('.service-back'),view=dialog.querySelector('.service-pages'),flow=dialog.querySelector('.service-text');
 let source=null,motion=null,closing=false,page=0,count=1,step=1;
 const goPage=n=>{page=Math.max(0,Math.min(count-1,n));view.scrollLeft=page*step;dialog.querySelector('.service-pagination span').textContent=`${page+1} / ${count}`;dialog.querySelector('.service-page-prev').disabled=page===0;dialog.querySelector('.service-page-next').disabled=page===count-1;};
 const measure=()=>{if(!dialog.open)return;step=view.clientWidth+36;count=Math.max(1,Math.ceil((flow.scrollWidth+36)/step));goPage(page);};
 const origin=()=>{const a=source.getBoundingClientRect(),b=dialog.getBoundingClientRect();return `translate3d(${a.left+a.width/2-b.left-b.width/2}px,${a.top+a.height/2-b.top-b.height/2}px,0) scale(${a.width/b.width},${a.height/b.height}) rotateY(0deg)`;};
 const open=button=>{
  if(dialog.open)return;
  source=button;source.setAttribute('aria-expanded','true');source.style.visibility='hidden';
  front.className=`service-face service-front ${button.className}`;front.innerHTML=button.innerHTML;
  back.style.background=getComputedStyle(button).backgroundColor;
  dialog.querySelector('h2').textContent=button.querySelector('h3').textContent;
  flow.replaceChildren(document.querySelector(`#service-info-${button.dataset.service}`).content.cloneNode(true));
  page=0;dialog.showModal();measure();
  spin.style.transform='rotateY(180deg)';
  motion=spin.animate([{transform:origin()},{transform:'translate3d(0,0,0) scale(1) rotateY(180deg)'}],{duration:reduced.matches?0:1000,easing:'cubic-bezier(.22,.65,.18,1)'});
  motion.finished.then(()=>{motion=null;dialog.querySelector('.service-close').focus({preventScroll:true});},()=>{});
 };
 const close=()=>{
  if(!dialog.open||closing)return;
  closing=true;const current=getComputedStyle(spin).transform;motion?.cancel();
  motion=spin.animate([{transform:current},{transform:origin()}],{duration:reduced.matches?0:850,easing:'cubic-bezier(.3,.55,.18,1)',fill:'both'});
  motion.finished.then(()=>{dialog.close();motion.cancel();motion=null;closing=false;source.style.visibility='';source.setAttribute('aria-expanded','false');source.focus({preventScroll:true});});
 };
 gallery.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>open(button)));
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
})();

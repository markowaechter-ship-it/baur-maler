(() => {
 const deck=document.querySelector('.chapter-deck');if(!deck)return;
 const stage=deck.querySelector('.chapter-stage'),cards=[...deck.querySelectorAll('[data-chapter]')];
 const buttons=[...document.querySelectorAll('[data-chapter-go]')],next=deck.querySelector('.chapter-next');
 const meter=document.querySelector('.chapter-meter'),header=document.querySelector('header');
 const desktop=matchMedia('(min-width: 1000px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)');
 let start=0,range=1,frame=0,index=0,lastActivated=-1,pendingFocus=null;
 const clamp=x=>Math.max(0,Math.min(1,x));
 const metrics=()=>{
  if(!desktop.matches)return;
  const top=header.getBoundingClientRect().height+20;
  document.documentElement.style.setProperty('--chapter-top',`${top}px`);
  const origin=deck.getBoundingClientRect().top+scrollY;
  start=Math.max(0,origin-top);range=Math.max(1,origin+deck.offsetHeight-stage.offsetHeight-top-start);
 };
 const activate=n=>{
  if(n===lastActivated)return;lastActivated=n;
  if(n===1)cards[1].querySelector('.experience').dispatchEvent(new Event('chapteractivate'));
 };
 const update=()=>{
  frame=0;if(!desktop.matches)return;
  const p=clamp((scrollY-start)/range),t=p*p*(3-2*p);
  cards[0].style.transform=`translate3d(0,${-t*122}%,0) rotateX(${t*17}deg) scale(${1-t*.05})`;
  cards[0].style.opacity=String(1-clamp((p-.82)/.18));
  cards[1].style.transform=`translate3d(0,${(1-t)*22}px,0) scale(${.955+t*.045})`;
  const visible=p<.025?0:p>.975?1:-1;
  cards.forEach((card,i)=>{card.inert=i!==visible;card.setAttribute('aria-hidden',String(i!==visible));});
  index=p<.5?0:1;
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.chapterGo)===index)));
  meter.querySelector('span').textContent=`${index+1} von 2`;meter.querySelector('b').style.transform=`translateY(${p*120}px)`;
  next.firstChild.textContent=index===0?'Unsere Geschichte ':'Leistungen entdecken ';
  const r=deck.getBoundingClientRect();document.body.classList.toggle('chapter-engaged',r.bottom>header.offsetHeight+100&&r.top<innerHeight-120);
  if(visible>=0){
   activate(visible);
   if(pendingFocus===visible){const content=cards[visible].querySelector('section');content.setAttribute('tabindex','-1');content.focus({preventScroll:true});pendingFocus=null;}
  }
 };
 const queue=()=>{if(!frame)frame=requestAnimationFrame(update);};
 const go=n=>{
  if(!desktop.matches){cards[n].scrollIntoView({behavior:'auto',block:'start'});return;}
  pendingFocus=n;cards[n].querySelector('section').scrollTop=0;metrics();window.scrollTo({top:start+range*n,behavior:'smooth'});queue();
 };
 buttons.forEach(button=>button.addEventListener('click',()=>go(Number(button.dataset.chapterGo))));
 next.addEventListener('click',()=>{
  if(index===0)go(1);else document.querySelector('#leistungen').scrollIntoView({behavior:'smooth',block:'start'});
 });
 const configure=()=>{
  document.body.classList.toggle('chapter-live',desktop.matches);
  if(desktop.matches){metrics();update();}
  else{
   document.body.classList.remove('chapter-engaged');
   cards.forEach(card=>{card.inert=false;card.removeAttribute('aria-hidden');card.style.transform='';card.style.opacity='';});
   lastActivated=-1;pendingFocus=null;
  }
 };
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',()=>{metrics();queue();},{passive:true});
 new ResizeObserver(()=>{metrics();queue();}).observe(header);
 desktop.addEventListener('change',configure);configure();
})();

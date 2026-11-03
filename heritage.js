(() => {
 const section=document.querySelector('.heritage');if(!section)return;
 const rail=section.querySelector('.heritage-rail'),track=section.querySelector('.heritage-track');
 const events=[...section.querySelectorAll('.heritage-event')];
 const previous=section.querySelector('.heritage-prev'),next=section.querySelector('.heritage-next');
 const progress=section.querySelector('.heritage-progress span');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let furthest=0,queued=false,started=false;
 const update=()=>{
  queued=false;const max=Math.max(0,rail.scrollWidth-rail.clientWidth);
  previous.disabled=rail.scrollLeft<=2;next.disabled=rail.scrollLeft>=max-2;
  if(started){furthest=Math.max(furthest,Math.min(1,(rail.scrollLeft+rail.clientWidth*.8)/Math.max(1,track.scrollWidth-32)));progress.style.transform=`scaleX(${furthest})`;}
 };
 const move=direction=>{const step=events[0].getBoundingClientRect().width;rail.scrollBy({left:direction*step,behavior:reduced.matches?'instant':'smooth'});};
 previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
 rail.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');started=true;update();observer.unobserve(entry.target);}});},{threshold:.12});
  events.forEach(event=>observer.observe(event));
 }else{events.forEach(event=>event.classList.add('is-revealed'));started=true;}
 new ResizeObserver(update).observe(rail);update();
})();

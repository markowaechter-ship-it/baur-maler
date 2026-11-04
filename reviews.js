(() => {
 const section=document.querySelector('.google-stories');if(!section)return;
 const track=section.querySelector('.google-review-track'),cards=[...track.children],previous=section.querySelector('.reviews-prev'),next=section.querySelector('.reviews-next'),position=section.querySelector('.reviews-position');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,drag=null;
 const step=()=>cards[1].offsetLeft-cards[0].offsetLeft;
 const update=()=>{frame=0;const s=step();if(!s)return;const first=Math.round(track.scrollLeft/s),visible=Math.max(1,Math.round(track.clientWidth/s));previous.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft>=track.scrollWidth-track.clientWidth-2;position.textContent=visible===1?`${first+1} / ${cards.length}`:`${first+1}–${Math.min(cards.length,first+visible)} / ${cards.length}`;};
 const move=d=>track.scrollTo({left:(Math.round(track.scrollLeft/step())+d)*step(),behavior:reduced.matches?'instant':'smooth'});
 previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
 track.addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update);},{passive:true});
 track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button===0)drag={x:e.clientX,left:track.scrollLeft,id:e.pointerId,moved:false};});
 track.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const dx=e.clientX-drag.x;if(!drag.moved&&Math.abs(dx)>8){drag.moved=true;track.setPointerCapture(e.pointerId);track.classList.add('is-dragging');}if(drag.moved){e.preventDefault();track.scrollLeft=drag.left-dx/(track.getBoundingClientRect().width/track.clientWidth);}});
 const stop=e=>{if(!drag||drag.id!==e.pointerId)return;const moved=drag.moved;drag=null;track.classList.remove('is-dragging');if(track.hasPointerCapture(e.pointerId))track.releasePointerCapture(e.pointerId);if(moved)track.scrollTo({left:Math.round(track.scrollLeft/step())*step(),behavior:reduced.matches?'instant':'smooth'});};
 track.addEventListener('pointerup',stop);track.addEventListener('pointercancel',stop);
 new ResizeObserver(update).observe(track);section.addEventListener('chapteractivate',update);update();
})();

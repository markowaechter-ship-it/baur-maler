const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){ nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }
menu.addEventListener('click',()=>{ const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open)); });
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.querySelectorAll('.swatch').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.swatch').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false');});
 button.classList.add('selected');button.setAttribute('aria-pressed','true');
 const room=document.querySelector('.room');room.style.background=button.dataset.colour;room.setAttribute('aria-label',`Abstrakte Raumskizze mit Wandfarbe ${button.dataset.name}`);
 document.querySelector('#colour-label').textContent=`Farbstimmung: ${button.dataset.name}`;
}));
const form=document.querySelector('#enquiry');
if(form)form.addEventListener('submit',event=>{
 event.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form);
 const body=`Guten Tag Baur-Team\n\nIch interessiere mich für: ${data.get('service')}\n\n${data.get('message')}\n\nName: ${data.get('name')}\nE-Mail: ${data.get('email')}\nTelefon: ${data.get('phone')||'–'}\n`;
 const link=`mailto:info@baur-maler.ch?subject=${encodeURIComponent('Projektanfrage: '+data.get('service'))}&body=${encodeURIComponent(body)}`;
 const fallback=document.querySelector('#email-fallback');fallback.href=link;fallback.hidden=false;
 document.querySelector('#form-status').textContent='Ihre E-Mail ist vorbereitet. Bitte versenden Sie sie in Ihrem E-Mail-Programm. Falls sich kein Programm öffnet, schreiben Sie direkt an info@baur-maler.ch oder rufen Sie uns an.';
 window.location.href=link;
});

// Hero colour study: update the room material and provide subtle pointer parallax.
const heroArt=document.querySelector('.hero-art');
if(heroArt){
 const wall=heroArt.querySelector('.art-wall');
 const glow=heroArt.querySelector('.art-glow');
 const swatches=[...heroArt.querySelectorAll('.hero-swatch')];
 swatches.forEach(button=>button.addEventListener('click',()=>{
  const tone=button.dataset.tone;
  wall.style.setProperty('--hero-tone',tone);
  wall.style.background=`linear-gradient(145deg, color-mix(in srgb, ${tone} 32%, #d8d4c8), color-mix(in srgb, ${tone} 22%, #858c87))`;
  glow.style.background=tone;
  document.querySelector('#hero-colour-name').textContent=button.dataset.name;
  swatches.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
 }));
 if(matchMedia('(pointer:fine) and (prefers-reduced-motion: no-preference)').matches){
  heroArt.addEventListener('pointermove',event=>{const r=heroArt.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5;const y=(event.clientY-r.top)/r.height-.5;wall.style.transform=`rotateY(${x*4}deg) rotateX(${-y*4}deg)`;});
  heroArt.addEventListener('pointerleave',()=>wall.style.transform='');
 }
}

// Smoothly compact the brand header after scrolling, with a reduced-motion-safe update.
const siteHeader=document.querySelector('header');
if(siteHeader){
 let ticking=false;
 const updateHeader=()=>{siteHeader.classList.toggle('is-scrolled',window.scrollY>28);ticking=false;};
 window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateHeader);ticking=true;}},{passive:true});
 updateHeader();
}

// Parallax on the transparent team portrait: subtle, eased, and disabled on reduced motion.
const teamPortrait=document.querySelector('.hero-team img');
if(teamPortrait && matchMedia('(prefers-reduced-motion: no-preference)').matches){
 let portraitFrame=false;
 const movePortrait=()=>{
  const hero=document.querySelector('.hero');
  const rect=hero.getBoundingClientRect();
  const progress=Math.max(0,Math.min(1,-rect.top/(rect.height*.85)));
  teamPortrait.style.setProperty('--team-scroll',`${Math.round(progress*34)}px`);
  teamPortrait.style.setProperty('--team-scale',(1-progress*.045).toFixed(3));
  portraitFrame=false;
 };
 addEventListener('scroll',()=>{if(!portraitFrame){requestAnimationFrame(movePortrait);portraitFrame=true;}},{passive:true});
 movePortrait();
}

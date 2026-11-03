(() => {
 const hero=document.querySelector('.paint-hero');
 if(!hero)return;
 const canvas=hero.querySelector('.hero-paint-canvas'),ctx=canvas.getContext('2d');
 if(!ctx)return;
 const roller=hero.querySelector('.paint-roller'),tools=hero.querySelector('.paint-tools');
 const status=tools.querySelector('.paint-status');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let colour='#9fc7df',width=0,height=0,dpr=1,brush,frame=0,active=false,touching=false,previous=null;
 let target={x:0,y:0},position={x:0,y:0};
 const makeBrush=()=>{
  brush=document.createElement('canvas');brush.width=120;brush.height=36;
  const b=brush.getContext('2d');b.fillStyle=colour;
  b.fillRect(5,6,110,24);
  // Short, varied fibres make the paint edges feel rolled rather than airbrushed.
  for(let x=0;x<120;x+=2){const edge=(Math.sin(x*17.31)+1)*2.5;b.globalAlpha=.35+(Math.sin(x*8.37)+1)*.3;b.fillRect(x,3+edge,2,30-edge*2);}
  b.globalAlpha=1;
 };
 const resize=()=>{
  const r=hero.getBoundingClientRect();
  if(r.width===width&&r.height===height)return;
  const saved=document.createElement('canvas');saved.width=canvas.width;saved.height=canvas.height;
  if(saved.width&&saved.height)saved.getContext('2d').drawImage(canvas,0,0);
  width=r.width;height=r.height;dpr=Math.min(devicePixelRatio||1,2);
  canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
  if(saved.width&&saved.height)ctx.drawImage(saved,0,0,saved.width,saved.height,0,0,width,height);
  previous=null;
 };
 const paint=(a,b)=>{
  const length=Math.hypot(b.x-a.x,b.y-a.y),steps=Math.max(1,Math.ceil(length/4));
  for(let i=0;i<=steps;i++){const t=i/steps;ctx.drawImage(brush,a.x+(b.x-a.x)*t-60,a.y+(b.y-a.y)*t-18);}
 };
 const tick=()=>{
  frame=0;if(!active)return;
  const ease=reduced.matches?1:.32;
  position.x+=(target.x-position.x)*ease;position.y+=(target.y-position.y)*ease;
  roller.style.transform=`translate3d(${position.x-67}px,${position.y-30}px,0)`;
  const distance=Math.hypot(target.x-position.x,target.y-position.y);
  if(previous&&Math.hypot(position.x-previous.x,position.y-previous.y)>.2)paint(previous,position);
  else if(!previous)paint(position,position);
  previous={...position};
  if(distance>.2)frame=requestAnimationFrame(tick);
 };
 const stop=()=>{
  active=false;previous=null;hero.classList.remove('is-painting');
  if(frame)cancelAnimationFrame(frame);frame=0;
 };
 const move=event=>{
  if(event.pointerType!=='mouse'&&!touching)return;
  const interactive=event.target.closest('a,button,input,select,textarea,summary,.paint-tools');
  if(interactive){stop();return;}
  const r=hero.getBoundingClientRect();target={x:event.clientX-r.left,y:event.clientY-r.top};
  if(!active){position={...target};previous=null;active=true;hero.classList.add('is-painting');}
  if(!frame)frame=requestAnimationFrame(tick);
 };
 hero.addEventListener('pointermove',move);
 hero.addEventListener('pointerleave',stop);
 hero.addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'||event.target.closest('a,button,.paint-tools'))return;
  touching=true;move(event);
 });
 hero.addEventListener('pointerup',event=>{if(event.pointerType!=='mouse'){touching=false;stop();}});
 hero.addEventListener('pointercancel',()=>{touching=false;stop();});
 // Scroll and tab switching must never leave a fake cursor behind.
 addEventListener('scroll',stop,{passive:true});addEventListener('blur',stop);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
 tools.querySelectorAll('[data-paint-colour]').forEach(button=>button.addEventListener('click',()=>{
  colour=button.dataset.paintColour;hero.style.setProperty('--paint-colour',colour);makeBrush();
  tools.querySelectorAll('[data-paint-colour]').forEach(b=>{const selected=b===button;b.classList.toggle('is-selected',selected);b.setAttribute('aria-pressed',String(selected));});
  status.textContent=`${button.getAttribute('aria-label')} ausgewählt.`;
 }));
 tools.querySelector('.paint-reset').addEventListener('click',()=>{stop();ctx.clearRect(0,0,width,height);status.textContent='Die Malfläche ist wieder frei.';});
 new ResizeObserver(resize).observe(hero);resize();makeBrush();hero.classList.add('paint-ready');
})();

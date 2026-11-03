(() => {
 const hero=document.querySelector('.paint-hero');if(!hero)return;
 const canvas=hero.querySelector('.hero-paint-canvas'),ctx=canvas.getContext('2d');if(!ctx)return;
 const cursor=hero.querySelector('.paint-dot'),tools=hero.querySelector('.paint-tools'),status=tools.querySelector('.paint-status');
 const fx=document.createElement('canvas');fx.className='hero-splatter-canvas';fx.setAttribute('aria-hidden','true');canvas.after(fx);
 const fctx=fx.getContext('2d');if(!fctx)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),TAU=Math.PI*2;
 let colour='#9fc7df',width=0,height=0,dpr=1,frame=0,active=false,touching=false,previous=null,lastTime=0;
 let target={x:0,y:0},position={x:0,y:0},radius=2,splatterDistance=0;
 let particles=[],wet=[];
 const tint=(hex,amount)=>{
  const rgb=hex.match(/[a-f\d]{2}/gi).map(c=>parseInt(c,16));
  return `rgb(${rgb.map(c=>Math.round(amount>0?c+(255-c)*amount:c*(1+amount))).join(',')})`;
 };
 const resize=()=>{
  const r=hero.getBoundingClientRect();if(r.width===width&&r.height===height)return;
  const saved=document.createElement('canvas');saved.width=canvas.width;saved.height=canvas.height;
  if(saved.width&&saved.height)saved.getContext('2d').drawImage(canvas,0,0);
  width=r.width;height=r.height;dpr=Math.min(devicePixelRatio||1,2);
  for(const layer of [canvas,fx]){layer.width=Math.round(width*dpr);layer.height=Math.round(height*dpr);}
  ctx.setTransform(dpr,0,0,dpr,0,0);fctx.setTransform(dpr,0,0,dpr,0,0);
  if(saved.width&&saved.height)ctx.drawImage(saved,0,0,saved.width,saved.height,0,0,width,height);
  previous=null;particles=[];wet=[];
 };
 const sample=(a,control,b,t)=>{
  const u=1-t,x=u*u*a.x+2*u*t*control.x+t*t*b.x,y=u*u*a.y+2*u*t*control.y+t*t*b.y;
  const dx=2*u*(control.x-a.x)+2*t*(b.x-control.x),dy=2*u*(control.y-a.y)+2*t*(b.y-control.y),length=Math.hypot(dx,dy)||1;
  return {x,y,nx:-dy/length,ny:dx/length,r:a.r+(b.r-a.r)*t};
 };
 const ribbon=(a,control,b)=>{
  const length=Math.hypot(b.x-a.x,b.y-a.y),steps=Math.max(3,Math.min(24,Math.ceil(length/3)));
  const points=Array.from({length:steps+1},(_,i)=>sample(a,control,b,i/steps));
  const mid=points[Math.floor(points.length/2)],r=Math.max(a.r,b.r,1);
  const shading=ctx.createLinearGradient(mid.x-mid.nx*r,mid.y-mid.ny*r,mid.x+mid.nx*r,mid.y+mid.ny*r);
  shading.addColorStop(0,tint(colour,-.06));shading.addColorStop(.18,tint(colour,.12));shading.addColorStop(.42,tint(colour,.04));shading.addColorStop(.87,colour);shading.addColorStop(1,tint(colour,-.08));
  ctx.fillStyle=shading;ctx.beginPath();
  points.forEach((p,i)=>{const x=p.x+p.nx*p.r,y=p.y+p.ny*p.r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});
  // Round the leading edge; the next segment continues seamlessly from this cap.
  const end=points.at(-1),startAngle=Math.atan2(end.ny,end.nx);
  ctx.arc(end.x,end.y,end.r,startAngle,startAngle+Math.PI,true);
  [...points].reverse().forEach(p=>ctx.lineTo(p.x-p.nx*p.r,p.y-p.ny*p.r));
  ctx.closePath();ctx.fill();
  // Fine, low-contrast fibres run along the flow rather than across the paint.
  ctx.lineCap='round';
  for(const offset of [-.72,-.42,-.12,.22,.57]){
   ctx.strokeStyle='rgba(255,255,255,.13)';ctx.lineWidth=.65;ctx.beginPath();
   points.forEach((p,i)=>{const x=p.x+p.nx*p.r*offset,y=p.y+p.ny*p.r*offset;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.stroke();
  }
  if(!reduced.matches){wet.push({points,age:0,life:.7});if(wet.length>48)wet.shift();}
 };
 const spawn=(speed,vx,vy)=>{
  // Splashes accent quick gestures instead of continuously filling the canvas with dots.
  const count=speed>1400?2:1;
  for(let i=0;i<count&&particles.length<32;i++){
   const a=Math.random()*TAU,force=40+Math.random()*(60+Math.min(speed,1600)*.08);
   particles.push({x:position.x+(Math.random()-.5)*radius,y:position.y+(Math.random()-.5)*radius,vx:vx*.09+Math.cos(a)*force,vy:vy*.09+Math.sin(a)*force-20,age:0,life:.2+Math.random()*.25,radius:1+Math.random()*(1.7+Math.min(speed,1800)/950),colour});
  }
 };
 const droplet=(context,p)=>{
  context.save();context.translate(p.x,p.y);context.rotate(Math.atan2(p.vy,p.vx));context.fillStyle=p.colour;
  context.beginPath();context.ellipse(0,0,p.radius*(1+Math.min(.5,Math.hypot(p.vx,p.vy)/500)),p.radius,0,0,TAU);context.fill();context.restore();
 };
 const tick=time=>{
  frame=0;const dt=Math.max(.008,Math.min(.032,lastTime?(time-lastTime)/1000:1/60));lastTime=time;let settling=false;
  if(active){
   const before={...position},ease=reduced.matches?1:1-Math.exp(-14*dt);
   position.x+=(target.x-position.x)*ease;position.y+=(target.y-position.y)*ease;
   const dx=position.x-before.x,dy=position.y-before.y,distance=Math.hypot(dx,dy),speed=distance/dt;
   const wanted=2+Math.pow(Math.min(speed/1500,1),.8)*43;
   radius+=(wanted-radius)*(1-Math.exp(-16*dt));
   cursor.style.transform=`translate3d(${position.x}px,${position.y}px,0)`;
   cursor.style.setProperty('--drop-scale',String(1+Math.min(speed/2200,.55)));
   const current={...position,r:radius};
   if(previous&&distance>.07){
    const a=previous.mid,b={x:(current.x+previous.x)/2,y:(current.y+previous.y)/2,r:(current.r+previous.r)/2};
    ribbon(a,previous,b);current.mid=b;
   }else current.mid=previous?.mid||{...current};
   previous=current;
   splatterDistance+=distance;
   if(speed>180&&splatterDistance>(speed>900?65:125)){
    if(!reduced.matches)spawn(speed,dx/dt,dy/dt);splatterDistance=0;
   }
   settling=Math.hypot(target.x-position.x,target.y-position.y)>.12||Math.abs(radius-wanted)>.1;
  }
  fctx.clearRect(0,0,width,height);
  wet=wet.filter(stroke=>{
   stroke.age+=dt;if(stroke.age>=stroke.life)return false;
   const opacity=(1-stroke.age/stroke.life)*.32;
   fctx.strokeStyle=`rgba(255,255,255,${opacity})`;fctx.lineWidth=1.4;fctx.lineCap='round';fctx.beginPath();
   stroke.points.forEach((p,i)=>{const x=p.x-p.nx*p.r*.5,y=p.y-p.ny*p.r*.5;i?fctx.lineTo(x,y):fctx.moveTo(x,y);});fctx.stroke();return true;
  });
  particles=particles.filter(p=>{
   p.age+=dt;p.vy+=110*dt;p.vx*=Math.exp(-1.4*dt);p.x+=p.vx*dt;p.y+=p.vy*dt;
   if(p.age>=p.life){droplet(ctx,p);return false;}droplet(fctx,p);return true;
  });
  if(settling||particles.length||wet.length)frame=requestAnimationFrame(tick);else lastTime=0;
 };
 const wake=()=>{if(!frame)frame=requestAnimationFrame(tick);};
 const stop=(clear=false)=>{
  active=false;previous=null;splatterDistance=0;hero.classList.remove('is-painting');
  if(clear){particles=[];wet=[];fctx.clearRect(0,0,width,height);}
  if(!particles.length&&!wet.length){if(frame)cancelAnimationFrame(frame);frame=0;lastTime=0;}
 };
 const move=event=>{
  if(event.pointerType!=='mouse'&&!touching)return;
  if(event.target.closest('a,button,input,select,textarea,summary,.paint-tools')){stop();return;}
  const r=hero.getBoundingClientRect();target={x:event.clientX-r.left,y:event.clientY-r.top};
  if(!active){position={...target};previous=null;radius=2;lastTime=0;active=true;hero.classList.add('is-painting');}
  wake();
 };
 hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',()=>stop());
 hero.addEventListener('pointerdown',event=>{if(event.pointerType==='mouse'||event.target.closest('a,button,.paint-tools'))return;touching=true;move(event);});
 hero.addEventListener('pointerup',event=>{if(event.pointerType!=='mouse'){touching=false;stop();}});
 hero.addEventListener('pointercancel',()=>{touching=false;stop();});
 addEventListener('scroll',()=>stop(),{passive:true});addEventListener('blur',()=>stop(true));document.addEventListener('visibilitychange',()=>{if(document.hidden)stop(true);});
 tools.querySelectorAll('[data-paint-colour]').forEach(button=>button.addEventListener('click',()=>{
  colour=button.dataset.paintColour;hero.style.setProperty('--paint-colour',colour);
  tools.querySelectorAll('[data-paint-colour]').forEach(b=>{const chosen=b===button;b.classList.toggle('is-selected',chosen);b.setAttribute('aria-pressed',String(chosen));});
  status.textContent=`${button.getAttribute('aria-label')} ausgewählt.`;
 }));
 tools.querySelector('.paint-reset').addEventListener('click',()=>{stop(true);ctx.clearRect(0,0,width,height);status.textContent='Die Malfläche ist wieder frei.';});
 new ResizeObserver(resize).observe(hero);resize();hero.classList.add('paint-ready');
})();

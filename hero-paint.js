(() => {
 const hero=document.querySelector('.paint-hero');if(!hero)return;
 const canvas=hero.querySelector('.hero-paint-canvas'),ctx=canvas.getContext('2d');if(!ctx)return;
 const cursor=hero.querySelector('.paint-brush'),tools=hero.querySelector('.paint-tools'),status=tools.querySelector('.paint-status');
 const fx=document.createElement('canvas');fx.className='hero-splatter-canvas';fx.setAttribute('aria-hidden','true');canvas.after(fx);
 const fctx=fx.getContext('2d');if(!fctx)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const TAU=Math.PI*2,wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
 let colour='#9fc7df',width=0,height=0,dpr=1,brush,frame=0,active=false,touching=false,previous=null;
 let target={x:0,y:0},position={x:0,y:0},angle=-.35,targetAngle=-.35,spin=0,lastTime=0,splatterDistance=0;
 let particles=[];
 const makeBrush=()=>{
  brush=document.createElement('canvas');brush.width=96;brush.height=30;
  const b=brush.getContext('2d');b.fillStyle=colour;
  // Fixed fibre lanes leave fine grooves through every rotated stamp.
  for(let x=3;x<93;x+=1.5){
   const fibre=(Math.sin(x*17.37)+1)/2,edge=2+fibre*5;
   b.globalAlpha=.25+fibre*.7;b.fillRect(x,edge,.7+fibre*.7,30-edge*2);
  }
 };
 const resize=()=>{
  const r=hero.getBoundingClientRect();if(r.width===width&&r.height===height)return;
  const saved=document.createElement('canvas');saved.width=canvas.width;saved.height=canvas.height;
  if(saved.width&&saved.height)saved.getContext('2d').drawImage(canvas,0,0);
  width=r.width;height=r.height;dpr=Math.min(devicePixelRatio||1,2);
  for(const layer of [canvas,fx]){layer.width=Math.round(width*dpr);layer.height=Math.round(height*dpr);}
  ctx.setTransform(dpr,0,0,dpr,0,0);fctx.setTransform(dpr,0,0,dpr,0,0);
  if(saved.width&&saved.height)ctx.drawImage(saved,0,0,saved.width,saved.height,0,0,width,height);
  previous=null;particles=[];
 };
 const stamp=(x,y,a)=>{ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.drawImage(brush,-48,-15);ctx.restore();};
 const paint=(a,b)=>{
  const length=Math.hypot(b.x-a.x,b.y-a.y),steps=Math.max(1,Math.ceil(length/3));
  const turn=wrap(b.angle-a.angle);
  for(let i=1;i<=steps;i++){const t=i/steps;stamp(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t,a.angle+turn*t);}
 };
 const spawn=(speed,vx,vy)=>{
  const count=1+Math.floor(Math.min(speed,1400)/550);
  for(let i=0;i<count&&particles.length<65;i++){
   const scatter=Math.random()*TAU,force=75+Math.random()*(85+Math.min(speed,1800)*.16);
   particles.push({x:position.x+(Math.random()-.5)*60,y:position.y+(Math.random()-.5)*15,vx:vx*.12+Math.cos(scatter)*force,vy:vy*.12+Math.sin(scatter)*force-25,age:0,life:.22+Math.random()*.27,radius:1.6+Math.random()*(2+Math.min(speed,1800)/500),colour});
  }
 };
 const droplet=(context,p)=>{
  context.save();context.translate(p.x,p.y);context.rotate(Math.atan2(p.vy,p.vx));context.fillStyle=p.colour;
  context.beginPath();context.ellipse(0,0,p.radius*(1+Math.min(.6,Math.hypot(p.vx,p.vy)/450)),p.radius,0,0,TAU);context.fill();context.restore();
 };
 const tick=time=>{
  frame=0;const dt=Math.max(.008,Math.min(.032,lastTime?(time-lastTime)/1000:1/60));lastTime=time;
  let settling=false;
  if(active){
   const before={...position},ease=reduced.matches?1:1-Math.exp(-18*dt);
   position.x+=(target.x-position.x)*ease;position.y+=(target.y-position.y)*ease;
   const diff=wrap(targetAngle-angle);
   if(reduced.matches){angle=targetAngle;spin=0;}else{spin+=(diff*150-spin*17)*dt;angle=wrap(angle+spin*dt);}
   cursor.style.transform=`translate3d(${position.x-55}px,${position.y-16}px,0)`;
   cursor.style.setProperty('--brush-angle',`${angle}rad`);
   const distance=Math.hypot(position.x-before.x,position.y-before.y);
   const speed=distance/dt,vx=(position.x-before.x)/dt,vy=(position.y-before.y)/dt;
   const now={...position,angle};
   if(previous&&distance>.12)paint(previous,now);else if(!previous)stamp(now.x,now.y,now.angle);
   previous=now;
   if(distance>.2){
    splatterDistance+=distance;
    if(splatterDistance>Math.max(14,38-speed*.008)){
     if(reduced.matches){ctx.fillStyle=colour;for(let i=0;i<2;i++){ctx.beginPath();ctx.arc(position.x+(Math.random()-.5)*125,position.y+(Math.random()-.5)*85,1+Math.random()*2.5,0,TAU);ctx.fill();}}
     else spawn(speed,vx,vy);
     splatterDistance=0;
    }
   }
   settling=Math.hypot(target.x-position.x,target.y-position.y)>.15||Math.abs(diff)>.003||Math.abs(spin)>.015;
  }
  fctx.clearRect(0,0,width,height);
  particles=particles.filter(p=>{
   p.age+=dt;p.vy+=140*dt;p.vx*=Math.exp(-1.2*dt);p.x+=p.vx*dt;p.y+=p.vy*dt;
   if(p.age>=p.life){droplet(ctx,p);return false;}droplet(fctx,p);return true;
  });
  if(settling||particles.length)frame=requestAnimationFrame(tick);else lastTime=0;
 };
 const wake=()=>{if(!frame)frame=requestAnimationFrame(tick);};
 const stop=(clear=false)=>{
  active=false;previous=null;splatterDistance=0;hero.classList.remove('is-painting');
  if(clear){particles=[];fctx.clearRect(0,0,width,height);}
  if(!particles.length){if(frame)cancelAnimationFrame(frame);frame=0;lastTime=0;}
 };
 const move=event=>{
  if(event.pointerType!=='mouse'&&!touching)return;
  if(event.target.closest('a,button,input,select,textarea,summary,.paint-tools')){stop();return;}
  const r=hero.getBoundingClientRect(),next={x:event.clientX-r.left,y:event.clientY-r.top};
  const dx=next.x-target.x,dy=next.y-target.y;
  if(active&&Math.hypot(dx,dy)>1.5)targetAngle=wrap(Math.atan2(dy,dx)+Math.PI/2);
  target=next;
  if(!active){position={...target};previous=null;spin=0;lastTime=0;active=true;hero.classList.add('is-painting');}
  wake();
 };
 hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',()=>stop());
 hero.addEventListener('pointerdown',event=>{if(event.pointerType==='mouse'||event.target.closest('a,button,.paint-tools'))return;touching=true;move(event);});
 hero.addEventListener('pointerup',event=>{if(event.pointerType!=='mouse'){touching=false;stop();}});
 hero.addEventListener('pointercancel',()=>{touching=false;stop();});
 addEventListener('scroll',()=>stop(),{passive:true});addEventListener('blur',()=>stop(true));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop(true);});
 tools.querySelectorAll('[data-paint-colour]').forEach(button=>button.addEventListener('click',()=>{
  colour=button.dataset.paintColour;hero.style.setProperty('--paint-colour',colour);makeBrush();
  tools.querySelectorAll('[data-paint-colour]').forEach(b=>{const chosen=b===button;b.classList.toggle('is-selected',chosen);b.setAttribute('aria-pressed',String(chosen));});
  status.textContent=`${button.getAttribute('aria-label')} ausgewählt.`;
 }));
 tools.querySelector('.paint-reset').addEventListener('click',()=>{stop(true);ctx.clearRect(0,0,width,height);status.textContent='Die Malfläche ist wieder frei.';});
 new ResizeObserver(resize).observe(hero);resize();makeBrush();hero.classList.add('paint-ready');
})();

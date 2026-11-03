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


document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const mobile=document.querySelector('.mobile-nav');
  if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');toggle.textContent=open?'×':'☰';});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','メニューを開く');toggle.textContent='☰';}));}
  const revealEls=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});revealEls.forEach(el=>io.observe(el));}else revealEls.forEach(el=>el.classList.add('is-visible'));
  const back=document.querySelector('.backtop');
  if(back){window.addEventListener('scroll',()=>back.classList.toggle('show',window.scrollY>600),{passive:true});back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
  document.querySelectorAll('.process-row').forEach(row=>{const toggleRow=()=>{const isOpen=row.getAttribute('aria-expanded')==='true';document.querySelectorAll('.process-row').forEach(r=>r.setAttribute('aria-expanded','false'));row.setAttribute('aria-expanded',String(!isOpen));};row.addEventListener('click',toggleRow);row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleRow();}});});
  const heroWord=document.querySelector('[data-hero-word]');
  if(heroWord){const words=['きっかけを、','考えを、','可能性を、'];let i=0;const target=document.querySelector('[data-hero-cycle]');if(target){setInterval(()=>{i=(i+1)%words.length;target.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(8px)'}],{duration:220,fill:'forwards'}).onfinish=()=>{target.textContent=words[i];target.animate([{opacity:0,transform:'translateY(-8px)'},{opacity:1,transform:'translateY(0)'}],{duration:300,fill:'forwards'});};},4200);}}
  const form=document.querySelector('#contact-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const result=form.querySelector('.form-result');result.classList.add('show');result.textContent='このデモでは送信処理を行いません。内容をコピーして、正式な連絡先が決まった段階で送信先を設定してください。';});}
  const copy=document.querySelector('[data-copy-email]');if(copy){copy.addEventListener('click',()=>{const val=copy.getAttribute('data-copy-email');if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(val).then(()=>{copy.textContent='コピーしました'}).catch(()=>{});}else{window.prompt('コピーしてください',val);}});}
});

(function(){
var bar=document.querySelector('header.bar');
function sc(){bar.classList.toggle('sc',window.scrollY>10)}sc();window.addEventListener('scroll',sc,{passive:true});
if(window.matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
var sel='.intro>*,.svc>*,.ba figure,.steps li,.band .wrap>*,details,.contact>*,.services .wrap>h2,#realisations .wrap>*,.trust li,.faq .wrap>h2';
document.querySelectorAll(sel).forEach(function(e){var i=Array.prototype.indexOf.call(e.parentNode.children,e);e.classList.add('rv');e.style.setProperty('--d',Math.min(i,4)*.1+'s')});
var n=document.querySelector('[data-n]');
function count(){var t=+n.dataset.n,s=null;function f(ts){s=s||ts;var p=Math.min((ts-s)/1400,1);n.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}n.textContent='0';requestAnimationFrame(f)}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);if(n&&x.target.contains(n))count()}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
})();
var b=document.querySelector('.menu-btn'),nv=document.getElementById('nav');
b.addEventListener('click',function(){var o=nv.classList.toggle('open');b.setAttribute('aria-expanded',o)});
nv.addEventListener('click',function(e){if(e.target.tagName==='A'){nv.classList.remove('open');b.setAttribute('aria-expanded','false')}});
document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();var f=e.target,ok=true;
['n','t','m','d'].forEach(function(i){var el=document.getElementById(i);if(!el.value.trim()||(i==='m'&&!/^\S+@\S+\.\S+$/.test(el.value))){el.style.borderColor='#c0392b';el.setAttribute('aria-invalid','true');ok=false}else{el.style.borderColor='';el.removeAttribute('aria-invalid')}});
if(!ok){document.querySelector('[aria-invalid]').focus();return}
var body='Nom : '+f.nom.value+'\nTéléphone : '+f.tel.value+'\nE-mail : '+f.email.value+'\nTravaux : '+f.sujet.value+'\n\n'+f.message.value;
document.getElementById('ok').style.display='block';
location.href='mailto:dubois.pierre@skynet.be?subject='+encodeURIComponent('Demande de devis – '+f.sujet.value)+'&body='+encodeURIComponent(body);
});

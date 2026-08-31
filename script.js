const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
const filters=document.querySelectorAll('.filter');const items=document.querySelectorAll('.gallery-card');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;items.forEach(item=>{item.style.display=(f==='all'||item.dataset.category===f)?'block':'none';});}));
const form=document.getElementById('whatsappForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const text=`السلام عليكم، أرغب في طلب استشارة هندسية.
الاسم: ${d.get('name')||''}
نوع المشروع: ${d.get('project')||''}
المدينة: ${d.get('city')||''}
التفاصيل: ${d.get('message')||''}`;window.open('https://wa.me/966538071500?text='+encodeURIComponent(text),'_blank');});}
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.service-grid article,.project-card,.gallery-card,.principles article,.residential-card,.contact-card,.cards-3>div').forEach(el=>{el.classList.add('reveal');observer.observe(el)});

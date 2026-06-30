const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const header = document.querySelector('.site-header');
let lastY = window.scrollY;
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  header.style.transform = y > lastY && y > 120 ? 'translateY(-90px)' : 'translateY(0)';
  lastY = y;
});

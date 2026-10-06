const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
      observer.unobserve(e.target);
    }
  });
},{threshold:.12});
cards.forEach((c,i)=>{
  c.style.opacity='0';
  c.style.transform='translateY(22px)';
  c.style.transitionDelay=`${i*70}ms`;
  observer.observe(c);
});

const hero = document.querySelector('.hero');
window.addEventListener('pointermove',(e)=>{
  if(!hero) return;
  const x=(e.clientX/window.innerWidth-.5);
  const y=(e.clientY/window.innerHeight-.5);
  document.querySelector('.hero-symbol').style.transform=`translate(${x*18}px,calc(-50% + ${y*12}px))`;
});

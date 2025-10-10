// script.js - simple language toggle and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const langToggle = document.getElementById('langToggle');
  let isFr = true;
  langToggle.addEventListener('click', function(){
    isFr = !isFr;
    document.querySelectorAll('.fr').forEach(el => el.hidden = !isFr);
    document.querySelectorAll('.en').forEach(el => el.hidden = isFr);
  });
  // smooth links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});
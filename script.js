
// Mobile menu toggle
document.getElementById('menuBtn').addEventListener('click', function(){
  document.getElementById('navLinks').classList.toggle('active');
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  });
});

// Simple form handler (no backend)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const note = document.getElementById('formNote');
    note.textContent = 'Thanks — copy the details and message me on WhatsApp or email.';
    note.style.color = '#a7f3d0';
    setTimeout(()=> note.textContent = '', 6000);
  });
}

// Menu responsive
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
btnMenu && btnMenu.addEventListener('click', ()=>{
nav.classList.toggle('open');
if(nav.classList.contains('open')) nav.style.display = 'flex'; else nav.style.display = '';
});


// Year in footer
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());


// Form contacto (solo muestra alerta)
const contactForm = document.getElementById('contact-form');
contactForm && contactForm.addEventListener('submit', (e)=>{
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
alert(`Gracias ${name}! Hemos recibido tu mensaje. Responderemos a ${email}.`);
contactForm.reset();
});
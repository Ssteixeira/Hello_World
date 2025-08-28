/*=============== toggle icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========= stick navbar =========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*========= remove toggle icon and navbar when click navbar link (scroll) =========*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

    /*========= scroll reveral =========*/
     ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-content, .portfolio_box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /*=============== Typed.js multilíngue ===============*/

// Textos por idioma
const texts = {
    pt_BR: ['Estudante de Eng de Software', 'FrontEnd Developer', 'BackEnd Developer', 'Estudante de Big Data'],
    en: ['Software Eng Student', 'FrontEnd Developer', 'BackEnd Developer', 'Big Data Student']
};

// Detecta idioma inicial da página
let lang = document.documentElement.lang || 'pt';

// Função para inicializar Typed.js
let typed; 
function initTyped(language) {
    if (typed) typed.destroy(); 
    typed = new Typed('.multiple-text', {
        strings: texts[language],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

// Inicializa com idioma da página
initTyped(lang);

// Botões para trocar idioma
document.getElementById('btn-pt').addEventListener('click', () => {
    lang = 'pt';
    document.documentElement.lang = 'pt';
    initTyped(lang);
});

document.getElementById('btn-en').addEventListener('click', () => {
    lang = 'en';
    document.documentElement.lang = 'en';
    initTyped(lang);
});
/*=============== send email ===============*/
  const form = document.querySelector('#contact form');
  const thankYou = form.querySelector('.thank-you-message');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
      }).then(response => {
          if (response.ok) {
              // Mostra a mensagem de agradecimento
              thankYou.style.display = 'block';
              // Limpa os campos
              form.reset();
          } else {
              alert("Ocorreu um erro. Tente novamente.");
          }
      }).catch(error => {
          alert("Ocorreu um erro. Tente novamente.");
          console.error(error);
      });
  });

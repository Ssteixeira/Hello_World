console.log("JS CARREGOU");

/*=============== toggle icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    /*========= stick navbar =========*/
    let header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    /*========= remove toggle icon =========*/
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/*========= scroll reveal =========*/
if (typeof ScrollReveal !== "undefined") {
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
}

/*=============== Typed.js multilíngue ===============*/

const texts = {
    pt: ['Engenheira de Software', 'Full Stack Developer', 'Estudante de Big Data'],
    en: ['Software Engineer', 'Full Stack Developer', 'Big Data Student']
};

let lang = document.documentElement.lang || 'pt';

let typed;

function initTyped(language) {
    if (typed) typed.destroy();
    if (typeof Typed !== "undefined") {
        typed = new Typed('.multiple-text', {
            strings: texts[language] || texts.pt,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
}

initTyped(lang);

/* Botões idioma (corrigido) */
const btnPt = document.getElementById('btn-pt');
const btnEn = document.getElementById('btn-en');

if (btnPt) {
    btnPt.addEventListener('click', () => {
        lang = 'pt';
        document.documentElement.lang = 'pt';
        initTyped(lang);
    });
}

if (btnEn) {
    btnEn.addEventListener('click', () => {
        lang = 'en';
        document.documentElement.lang = 'en';
        initTyped(lang);
    });
}

/*=============== send email (EmailJS) ===============*/

const form = document.querySelector('#contact-form');

if (form) {
    console.log("FORM ENCONTRADO");

    const thankYou = form.querySelector('.thank-you-message');

    // Inicializa EmailJS
    (function(){
        emailjs.init('i-_En5m4FxQKZY7x2');
    })();

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        console.log("ENVIANDO EMAIL...");

        emailjs.sendForm('service_hd35mre', 'template_eg0orrn', form)
        .then(function(response) {
            console.log("SUCESSO!", response);
            if (thankYou) thankYou.style.display = 'block';
            form.reset();
        })
        .catch(function(error) {
            console.error("ERRO COMPLETO:", error);
            alert("Erro ao enviar. Veja o console.");
        });
    });

} else {
    console.error("FORM NÃO ENCONTRADO");
}
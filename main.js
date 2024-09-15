ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home.content, heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-contact', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay:100,
    loop: true,
});
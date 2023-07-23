// ============= toggle icon navbar ==============
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


// ============= scroll section active link ==============
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
        };
    });

    // ================ sticky navbar ==================

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ============== remove toggle icon and navbar when click navbar link (scroll) ===================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 // ================ scroll reveal ==================
 ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h3, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-p', { origin: 'right' });

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.logo, .navbar', {origin: 'top'});

 // ================ typed js ==================

 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphic Designer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
 });

//  ---------Read More btn ------------

const parentContainer = document.querySelector('.about-p');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ?

    "Read Less..." : "Read More...";
})


const type = new Typed('.multiple-text-1', {
    strings: ['Frontend Developer', 'Graphic Designer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
 });



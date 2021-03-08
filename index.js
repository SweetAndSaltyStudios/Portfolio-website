const hamburger = document.querySelector('.hamburger');
const navLinkContainer = document.querySelector('.nav-link-container');
const navLinks = document.querySelectorAll('.nav-link-container li');

const navSlide = () =>
{
    hamburger.addEventListener('click', () => 
    {
        console.log('HAMBURGER CLICK');

        navLinkContainer.classList.toggle('nav-active');
        navLinks.forEach((navLink, index) => 
        {
            navLink.style.animation = navLink.style.animation == false 
            ? `navLinkFade 0.5s ease forwards ${index / 10 + 0.5}s`
            : '';
        });

        hamburger.classList.toggle('hamburger-pressed');
    });
}

navSlide();
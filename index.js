import { createElement } from "./src/models/elementGenerator.js";

window.onload = () => 
{
    createNavbar();
}

function createNavbar()
{
    const navbarElement = createElement('nav', document.body, ['navbar']);
    
    const brandTitle = createElement('div', navbarElement, ['brand-title'] );
    brandTitle.innerText = 'Sweet & Salty Studios';

    const hamburgerToggle = createElement('a', navbarElement, ['toggle-button']);
    hamburgerToggle.href = '#';

    hamburgerToggle.addEventListener('click', () => 
    {
        navbarLinks.classList.toggle('active');
    });

    createElement('span', hamburgerToggle, ['bar']);
    createElement('span', hamburgerToggle, ['bar']);
    createElement('span', hamburgerToggle, ['bar']);
    
    const navbarLinks = createElement('div', navbarElement, ['navbar-links']);
    navbarLinks.innerHTML = 
    `<ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Work</a>
        </li>
        <li>
            <a href="#">Projets</a>
        </li>
    </ul>`;
}
import { createElement } from "./elementGenerator.js";

export default class Navbar
{
    constructor(parentElement, title)
    {
        const element = createElement('nav', parentElement, ['navbar']);

        const brandTitle = createElement('div', element, ['brand-title'] );
        brandTitle.innerText = title;
        
        const navbarLinks = createElement('div', element, ['navbar-links']);
        this.linkContainer = createElement('ul', navbarLinks);

        const hamburgerToggleElement = createElement('a', element, ['toggle-button']);
        hamburgerToggleElement.href = '#';
    
        hamburgerToggleElement.addEventListener('click', () => 
        {
            navbarLinks.classList.toggle('active');
        });
    
        createElement('span', hamburgerToggleElement, ['bar']);
        createElement('span', hamburgerToggleElement, ['bar']);
        createElement('span', hamburgerToggleElement, ['bar']);
    }

    createListItems(data) 
    {
        data.forEach(element => 
        {
            const linkElement = createElement('li', this.linkContainer);
            const anchorElement = createElement('a', linkElement);
            anchorElement.href = element.link;
            anchorElement.innerText = element.title;
        });
    }
}
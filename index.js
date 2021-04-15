import Navbar from "./src/models/navbar.js";

window.onload = () => 
{
    const navbar = new Navbar(document.body, 'Sweet & Salty Studios');
    
    navbar.createListItems([
        { link: '#', title: 'Home' },
        { link: '#', title: 'About' },
        { link: '#', title: 'Work' },
        { link: '#', title: 'Projects'} 
    ]);
}
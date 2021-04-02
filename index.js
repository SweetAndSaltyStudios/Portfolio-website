import Navbar from "./src/models/navbar.js";
import Slideshow from "./src/models/slideshow.js";

window.onload = () => 
{
    createNavbar();
    createSlideshow();
}

function createNavbar()
{
    const navbar = new Navbar(document.body, 'Sweet & Salty Studios');
    
    navbar.createListItems([
        { link: '#', title: 'Home' },
        { link: '#', title: 'About' },
        { link: '#', title: 'Work' },
        { link: '#', title: 'Projects'} 
    ]);
}

function createSlideshow()
{
    const slideShow = new Slideshow();
}
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

var getObjectTypeToString = (obj) =>
{
    return ({}).toString.call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}

var getRandomColor = () =>
{
    randomColor = "#";
    
    for(i = 0;i < 6; i++)
    {
        randomColor += Math.floor(Math.random() * 16).toString(16);
    }

    return randomColor;
}

navToggle.addEventListener('click', () => 
{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(navLink => 
{
    navLink.addEventListener('click', () => 
    {
        document.body.classList.remove('nav-open');
    });
});

// var date = new Date();
// alert("Page updated!\n" + date.toString());
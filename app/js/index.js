const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener('click', () => 
{
    document.body.classList.toggle('nav-open');
});

var date = new Date();
alert("Page updated!\n" + date.toString());
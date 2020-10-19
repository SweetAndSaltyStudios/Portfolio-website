var timeDisplay = document.querySelector(".time-display");
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let language = navigator.language;

function refreshTime() 
{
    let dateString = new Date().toLocaleString(language, {timeZone: timeZone});

    let formattedString = dateString.replace(", ", " - ");
    
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);
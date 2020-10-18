var timeDisplay = document.querySelector(".time-display");

function refreshTime() 
{
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    var dateString = new Date().toLocaleString("en-US", {timeZone: timeZone});
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);
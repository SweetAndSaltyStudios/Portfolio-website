function hasNetwork(online)
{
    const element = document.querySelector('.newtork-status');

    if(online)
    {
        element.classList.remove('offline');
        element.classList.add('online');
        element.innerText = 'Online';
    }
    else
    {
        element.classList.remove('online');
        element.classList.add('offline');
        element.innerText = 'Offline';
    }
}

// window.addEventListener("load", () => 
// {
//     hasNetwork(navigator.onLine);

//     window.addEventListener("online", () => 
//     {
//         hasNetwork(true);
//     }); 
    
//     window.addEventListener("offline", () => 
//     {
//         hasNetwork(false);
//     });
// });
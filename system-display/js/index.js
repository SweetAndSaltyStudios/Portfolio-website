function create_info_tab(tab_title, content_data_map, parent_element)
{
    let list_items = [];

    for (let [key, value] of content_data_map.entries()) 
    {
        list_items += `<li>${key + value}</li>`;
    }

    let new_tab_content = `
    <div>
    <div class="tab">
    <h1 class="tab-title">
                    <strong>${tab_title}</strong>
                </h1>
                    <div class="tab-content">
                    ${list_items}
                    </div>
                </div>
            </div> 
    </div>`

    parent_element.innerHTML += new_tab_content;
}

//const tab_container = document.querySelector('.tab-container');

// create_info_tab("GENERAL", general_info_map, tab_container);
// create_info_tab("NETWORK", newtwork_info_map, tab_container);
// create_info_tab("BROWSER", browser_info_map, tab_container);
// create_info_tab("DEVICE", device_info_map, tab_container);
// create_info_tab("MIMES", mime_info_map, tab_container);
// create_info_tab("OTHERS", other_info_map, tab_container);

/*

const geolocation = navigator.geolocation;

geolocation.getCurrentPosition((position) => 
{
    const coordinates = position.coords;
    
    console.log('Your current position is: ');
    console.log(`Latitude: ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.latitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);
}, 
(error) =>
{
    console.error(`ERROR (${error.code}): ${error.message}`);
}, 
{ 
    eableHighAccurac: true, timeout: 5000, maximumAge: 0
});
*/
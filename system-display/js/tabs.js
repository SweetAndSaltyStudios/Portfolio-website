function create_tab_elements(content_data_objects)
{
    const tab__button_container = document.querySelector('.tab__button_container');
    const tab_content_container = document.querySelector('.tab_content_container');
    
    id = 1;
    
    content_data_objects.forEach(data_object => 
    {
        let new_list_elements = [];

        tab__button_container.innerHTML += 
        `<button class="tab__button" data-for-tab="${id}">${data_object.title}</button>`;

        for (const [key, value] of data_object.content_map.entries()) 
        {
            if(value === Object(value))
            {
                new_list_elements += `<h2>${key}</h2>`;

                for (const [object_key , object_value] of Object.entries(value)) 
                {
                    new_list_elements += 
                    `<li>${object_value}</li>`;
                }
            }
            else
            {
                new_list_elements += 
                `<h2>${key}</h2><li>${value}</li>`;
            }

        }
        
        tab_content_container.innerHTML += 
        `<div class="tab__content" data-for-tab="${id}">${new_list_elements}</div>`
       
        id++;
    });

}

function setup_tabs(tab__buttons, tab__contents) 
{
    tab__buttons.forEach(button => 
    {
        button.addEventListener('click', () => 
        {
            const content_to_activate = tab__contents[button.dataset.forTab - 1];
            
            tab__buttons.forEach(button => 
            {
                button.classList.remove('tab__button--active');
            });

            tab__contents.forEach(content => 
            {
                content.classList.remove('tab__content--active');
            });
            
            button.classList.add('tab__button--active');
            content_to_activate.classList.add('tab__content--active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => 
{
    const content_data_objects = [
        { 'title' : 'GENERAL', 'content_map' : general_info_map }, 
        { 'title' : 'BROWSER', 'content_map' : browser_info_map },
        { 'title' : 'DEVICE', 'content_map' : device_info_map },
        { 'title' : 'NETWORK', 'content_map' : newtwork_info_map },
        { 'title' : 'MIMES', 'content_map' : mime_info_map },
        { 'title' : 'STORAGE', 'content_map' : storage_info_map },
        { 'title' : 'OTHER', 'content_map' : other_info_map}];

    create_tab_elements(content_data_objects);

    const tab__buttons = document.querySelectorAll('.tab__button');
    const tab__content = document.querySelectorAll('.tab__content');

    setup_tabs(tab__buttons, tab__content);
    
    tab__buttons[0].click();
});

const general_info_map =  new Map([
    ['Online', navigator.onLine],
    ['Language', navigator.language],
    ['Languages', navigator.languages],
]);

const browser_info_map = new Map([
    ['App name', navigator.appName],
    ['App code name', navigator.appCodeName],
    ['App version', navigator.appVersion],
    ['Platform', navigator.platform],
    ['Web driver', navigator.webdriver],
    ['Is cookies enabled', navigator.cookieEnabled],
    ['Do not track', navigator.doNotTrack],
]);

const device_info_map = new Map([
    ['Keyboard', navigator.keyboard],
    ['Operating system', navigator.oscpu],
    ['Max touch points', navigator.maxTouchPoints],
    ['Media devices', navigator.mediaDevices],
    ['Device memory', `This device has at least ${navigator.deviceMemory}GiB of RAM.`],
    ['Hardware concurrency', `${navigator.hardwareConcurrency} logical processors available to run threads on the device.}`]
]);

const connection = navigator.connection;

const newtwork_info_map = new Map([
    ["Down link", connection.downLink],
    ["Down link max", connection.downLinkMax],
    ["Effective type", connection.effectiveType],
    ["Rtt", connection.rtt],
    ["Save data", connection.saveData],
    ["Type", connection.type],
]);

const mimeTypes = navigator.mimeTypes;
const mime_info_map = new Map();
const mimeLenth = mimeTypes.length;

mime_info_map.set('Count', `${mimeLenth}`);

for(var i = 0; i < mimeLenth; i++)
{
    mime_info_map.set(`Mime ${i + 1}`, mimeTypes[i]);
};

const storage_info_map = new Map([
    ['LOCAL STORAGE', window.localStorage],
    ['SESSION STORAGE', window.localStorage],
]);

const other_info_map = new Map([
    ['Clipboard', navigator.clipboard],
    ['Credentials', navigator.credentials],
    ['Geolocation', navigator.geolocation],
    ['Permissions', navigator.permissions],
    ['Product', navigator.product],
    ['Product sub', navigator.productSub],
    ['Service worker', navigator.serviceWorker],
    ['Storage', navigator.storage],
    ['Vendor', navigator.vendor],
    ['Vendor sub', navigator.vendorSub],
    ['User agent', navigator.userAgent],
]);
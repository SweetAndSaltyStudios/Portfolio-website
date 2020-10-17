
const general_info_map =  new Map([
    ["App name: " , navigator.appName],
    ["App code name: " , navigator.appCodeName],
    ["App version: " , navigator.appVersion],
    ["Clipboard: " , navigator.clipboard],
    ["Is cookies enabled: " , navigator.cookieEnabled],
    ["Credentials: " , navigator.credentials],
    ["Do not track: " , navigator.doNotTrack],
    ["Geolocation: " , navigator.geolocation],
    ["Hardware concurrency: " , navigator.hardwareConcurrency],
    ["Languages: " , navigator.languages],
    ["Language: " , navigator.language],
    ["Max touch points: " , navigator.maxTouchPoints],
    ["Media devices: " , navigator.mediaDevices],
    ["Mime types: " , navigator.mimeTypes],
    ["Ms Manipulation views enabled :" , navigator.msManipulationViewsEnabled],
    ["Ms Max touuch points :" , navigator.msMaxTouchPoints],
    ["Ms Pointer enabled :" , navigator.msPointerEnabled],
    ["Online: " , navigator.onLine],
    ["Permissions: " , navigator.permissions],
    ["Platform: " , navigator.platform],
    ["Pointer enabled: " , navigator.pointerEnabled],
    ["Product: " , navigator.product],
    ["Product sub: " , navigator.productSub],
    ["Service worker: " , navigator.serviceWorker],
    ["Storage: " , navigator.storage],
    ["User agent: " , navigator.userAgent],
    ["Vendor: " , navigator.vendor],
    ["Vendor sub: " , navigator.vendorSub],
    ["Web driver: " , navigator.webdriver]
]);

const other_info_map = new Map([
    ["KEY: " , "VALUE"],
    ["KEY: " , "VALUE"],
    ["KEY: " , "VALUE"],
    ["KEY: " , "VALUE"]
]);

initialize_info_box_content(
    "GENERAL",
    document.querySelector('.general-info'),
    general_info_map
);

initialize_info_box_content(
    "OTHER",
    document.querySelector('.other-info'),
    other_info_map
);

function initialize_info_box_content (title, info_element, data_map)
{
    const title_element_name = "." + info_element.className + ' .flexbox-title';
    const content_element_name = "." + info_element.className + ' .flexbox-content';

    console.log(title_element_name);
    console.log(content_element_name);

    const title_element = document.querySelector(title_element_name);
    const content_element = document.querySelector(content_element_name);

    console.log(title_element);
    console.log(content_element);

    title_element.innerHTML = title; 

    for (let [key, value] of data_map.entries()) 
    {
        let entry = key + value;
    
        var new_line_tag = document.createElement('li');
    
        new_line_tag.innerHTML = entry;
    
        content_element.append(new_line_tag);
    }
}

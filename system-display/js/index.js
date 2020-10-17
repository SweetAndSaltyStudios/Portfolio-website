const general_info_map =  new Map([
    ['Online: ' , navigator.onLine],
    ['Languages: ' , navigator.languages],
    ['Language: ' , navigator.language],

    // Specific to Internet Explorer and Microsoft Edge.
    // ['Ms Manipulation views enabled: ', navigator.msManipulationViewsEnabled],
    // ['Ms Max touuch points: ' , navigator.msMaxTouchPoints],
    // ['Ms Pointer enabled: ', navigator.msPointerEnabled],
    
    // In late 2013, 
    // pointerEnabled was removed from the specification as checking PointerEvent in
    // Window object is sufficient for feature detection. 
    // Do not use this property and use PointerEvent instead.
    // ['Pointer enabled: ' , navigator.pointerEnabled],

    
]);

const browser_info_map = new Map([
    ['App name: ' , navigator.appName],
    ['App code name: ' , navigator.appCodeName],
    ['App version: ' , navigator.appVersion],
    ['Platform: ' , navigator.platform],
    ['Web driver: ' , navigator.webdriver],
    ['Is cookies enabled: ' , navigator.cookieEnabled],
    ['Do not track: ' , navigator.doNotTrack],
]);

const device_info_map = new Map([
    ['Operating system: ', navigator.oscpu],
    ['Max touch points: ' , navigator.maxTouchPoints],
    ['Media devices: ' , navigator.mediaDevices],
    ['Device memory: ' , `This device has at least ${navigator.deviceMemory}GiB of RAM.`],
    ['Hardware concurrency: ' , `${navigator.hardwareConcurrency} logical processors available to run threads on the device.}`]
]);

const other_info_map = new Map([
    ['Clipboard: ' , navigator.clipboard],
    ['Credentials: ' , navigator.credentials],
    ['Geolocation: ' , navigator.geolocation],
    ['Permissions: ' , navigator.permissions],
    ['Product: ' , navigator.product],
    ['Product sub: ' , navigator.productSub],
    ['Service worker: ' , navigator.serviceWorker],
    ['Storage: ' , navigator.storage],
    ['Vendor: ' , navigator.vendor],
    ['Vendor sub: ' , navigator.vendorSub],
    
    ['User agent: ' , navigator.userAgent],
]);

initialize_info_box_content(
    "GENERAL",
    document.querySelector('.general-info'),
    general_info_map
);

initialize_info_box_content(
    "BROWSER",
    document.querySelector('.browser-info'),
    browser_info_map
);

initialize_info_box_content(
    "DEVICE",
    document.querySelector('.device-info'),
    device_info_map);

function initialize_info_box_content (title, info_element, data_map)
{
    const title_element_name = "." + info_element.className + ' .flexbox-title';
    const content_element_name = "." + info_element.className + ' .flexbox-content';

    const title_element = document.querySelector(title_element_name);
    const content_element = document.querySelector(content_element_name);

    title_element.innerHTML = title; 

    for (let [key, value] of data_map.entries()) 
    {
        let entry = key + value;
    
        var new_line_tag = document.createElement('li');
    
        new_line_tag.innerHTML = entry;
    
        content_element.append(new_line_tag);
    }
}

const mimeTypes = navigator.mimeTypes;
const mime_info_map = new Map();
const mimeLenth = mimeTypes.length;

mime_info_map.set('Count: ', `${mimeLenth}`);

for(var i = 0; i < mimeLenth; i++)
{
    mime_info_map.set(`Mime ${i + 1}:`, mimeTypes[i]);
};

initialize_info_box_content(
    'MIMES',
    document.querySelector('.mime-info'),
    mime_info_map);
    
const geolocation = navigator.geolocation;

const options = { eableHighAccurac: true, timeout: 5000, maximumAge: 0 }
function onSuccess(position) 
{
    const coordinates = position.coords;
    
    console.log('Your current position is: ');
    console.log(`Latitude: ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.latitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);
}

function onError(error)
{
    console.error(`ERROR (${error.code}): ${error.message}`);
}

geolocation.getCurrentPosition(onSuccess, onError, options);
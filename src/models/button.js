export default class Button
{
    constructor(element, onClick)
    {
        this.element = element;
        this.element.addEventListener('click', onClick);
    }

    addImage(source)
    {
        if(typeof source === typeof '') this.element.innerHTML = source;
    }
}
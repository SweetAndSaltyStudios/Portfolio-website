export default class Button
{
    constructor(element, onClick)
    {
        element.addEventListener('click', onClick);
    }
}
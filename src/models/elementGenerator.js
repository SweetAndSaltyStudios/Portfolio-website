export function createElement(elementType, parent = document.body, components = [])
{
    const newElement = document.createElement(elementType, 'Sweet & Salty Studios');
    parent.appendChild(newElement);

    components.forEach(component => 
    {
        newElement.classList.add(component);
    });

    return newElement;
}
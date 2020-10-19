
function create_tabs(parent_element, content_data)
{
    for (i = 0; i < content_data.length; i++) 
    {
        const new_tab_element = `<button class="tab__button" data-for-tab="${i + 1}">${content_data[i].title}</button>`;
        
        parent_element.innerHTML += new_tab_element;
    };
}

function create_contents(parent_element, content_data)
{
    for (i = 0; i < content_data.length; i++) 
    {
        const new_content_element = 
        `<div class="tab__content" data-for-tab="${i + 1}">
        <h2>${content_data[i].title}</h2>
        <p>
            ${content_data[i].content}
        </p>
        </div>`
        
        parent_element.innerHTML += new_content_element;
    }
}

function setupTabs(tab__buttons, tab__contents) 
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
    const tabs_sidebar = document.querySelector('.tab__sidebar');
    const tab_contents = document.querySelector('.tab_contents');

    const content_data = [{ title:'Title 1', content : 'Content 1'}, { title:'Title 2', content : 'Content 2'}];

    create_tabs(tabs_sidebar, content_data);
    create_contents(tab_contents, content_data);

    const tab__buttons =  document.querySelectorAll('.tab__button');
    const tab__contents = document.querySelectorAll('.tab__content');

    setupTabs(
        tab__buttons,
        tab__contents,
    );
    
    tab__buttons[0].click();
});
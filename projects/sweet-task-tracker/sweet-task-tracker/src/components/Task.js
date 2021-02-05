import Button from './Button.js'

function Task({task, onDelete, onToggle}) 
{
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
        onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.description}
                <Button 
                color='red' 
                label='Delete' 
                onClickEvent = {() => onDelete(task.id)}>
                </Button>
            </h3>
            <p>{task.created}</p>
        </div>
    )
}

Task.propTypes = 
{

}

export default Task


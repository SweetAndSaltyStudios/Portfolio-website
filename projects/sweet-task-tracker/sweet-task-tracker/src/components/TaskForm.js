import { useState } from 'react';

const TaskForm = ({createTask}) => 
{
    const onSubmit = (event) => 
    {
        event.preventDefault();

        if(!description){ alert("Please add task"); }

        onCreate
    }

    const [description, setDescription] = useState('');
    const [reminder, setReminder] = useState(false);

    return (
       <form className='add-form' onSubmit={onSubmit}>
           <div className='form-control'>
            <label>Task</label>
            <input 
            type='text' 
            placeholder='Create Task' 
            value={description} 
            onChange={(event) => setDescription(event.target.value)}/>
           </div>
           <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'  
            value={reminder} 
            onChange={(event) => setReminder(event.currentTarget.checked)}/>
           </div>

           <input type='submit' value='Save Task' className='btn btn-block'></input>
       </form>
    )
}

export default TaskForm
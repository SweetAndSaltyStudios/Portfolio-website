import { useState } from 'react';

import Button from './Button.js';

const TaskForm = ({onCreate}) => 
{
    const onSubmit = (event) => 
    {
        event.preventDefault();

        if(!description)
        { 
            alert("Please add description.");
            return;
        }

        onCreate({description, reminder});

        setDescription('');
        setReminder(false);
    }

    const [description, setDescription] = useState('');
    const [reminder, setReminder] = useState(false);

    return (
       <form className='add-form' onSubmit={onSubmit}>
           <div className='form-control'>
            <label>Description</label>
            <input 
            type='text' 
            placeholder='Description' 
            value={description} 
            onChange={(event) => setDescription(event.target.value)}/>
           </div>
           <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'  
            checked={reminder}
            value={reminder} 
            onChange={(event) => setReminder(event.currentTarget.checked)}/>
           </div>

           <Button 
           color='green' 
           label='Create' 
           className='btn btn-block'>
           </Button>
       </form>
    )
}

export default TaskForm
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm.js'

function App() 
{
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        description: 'Description 1',
        reminder: true,
    },
    {
        id: 2,
        description: 'Description 2',
        reminder: false,
    }]);

  const deleteTask = (id) => 
  {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) =>
  {
    setTasks(tasks.map((task) => task.id === id 
    ? {...task, reminder: task.reminder = !task.reminder}
    : task));
  }

  const createTask = (task) =>
  {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
    <Header 
      title = 'Sweet Task Tracker' 
      onFormToggle={() => setShowTaskForm(!showTaskForm)} 
      showTaskForm={showTaskForm}/>
    
    {showTaskForm && <TaskForm onCreate={createTask}/>}
    {tasks.length > 0 
      ? <Tasks 
      tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/>
      : 'No tasks'}
    </div>
  );
}

export default App;

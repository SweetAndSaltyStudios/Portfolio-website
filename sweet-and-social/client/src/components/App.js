import React from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard.js';
import { ContactsProvider } from '../contexts/ContactsProvider';

function App()
{
  const [id, setID] = useLocalStorage('id');
  
  const dashboard = (
    <ContactsProvider>
      <Dashboard id = {id}/>
    </ContactsProvider>
  )

  return(
    id ? dashboard : <Login onSubmitID = { setID } />
  )
}

export default App;

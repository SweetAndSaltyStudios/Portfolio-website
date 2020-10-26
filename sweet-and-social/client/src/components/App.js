import React from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard.js';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

function App()
{
  const [id, setID] = useLocalStorage('id');
  
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id = {id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )

  return(
    id ? dashboard : <Login onSubmitID = { setID } />
  )
}

export default App;

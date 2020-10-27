import React, { useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

const ConversationsContext = React.createContext()

export function useConversations() 
{
  return useContext(ConversationsContext)
}

export function ConversationsProvider({ id, children }) 
{
  const [conversations, setConversations] = useLocalStorage('conversations', [])
  const [ selectedConversationOrder, setSelectedConversationOrder] = useState(0);
  const { contacts } = useContacts();
  
  function createConversation(recipients) 
  {
    setConversations(currentConversations => 
    {
      return [ ...currentConversations, { recipients, messages: [] } ]
    })
  }

  function addMessageToConversation( { recipients, text, sender } )
  {
    setConversations(previouseConversations => 
    {
      let hasMadeChange = false;
      const newMessage = { sender, text };
      const newConversations = previouseConversations.map(conversation => 
      {
        if(arrayEquality(conversation.recipients, recipients))
        {
          hasMadeChange = true;
          return {
            ...conversation, 
            messages: [...conversation.messages, newMessage]
          };
        }

        return conversation;
      });

      if(hasMadeChange)
      {
        return newConversations;
      }
      else
      {
        return [ 
          ...previouseConversations, 
          { recipients, messages: [newMessage]} ]
      }
    });
  }

  function sendMessage(recipients, text)
  {
    addMessageToConversation({ recipients, text, sender: id});
  }

  const formattedConversations = conversations.map((conversation, order) => 
  {
    const recipients = conversation.recipients.map(recipient => 
    {
      const contact = contacts.find(contact => 
      {
        return contact.id === recipient;
      });

      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    
    const messages = conversation.messages.map(message => 
    {
        const contact = contacts.find(contact => 
        {
          return contact.id === message.sender;
        });
  
        const name = (contact && contact.name) || message.sender;
        const isFromOwner = id === message.sender;

        return { ...message, senderName: name, isFromOwner };
    });

    const selected = order === selectedConversationOrder;

    return { ...conversations, recipients, selected };
  });

  const value = 
  { 
    conversations: formattedConversations, 
    selectedConversation: formattedConversations[selectedConversationOrder],
    sendMessage,
    selectConversationOrder: setSelectedConversationOrder,
    createConversation 
  } 

  return (
    <ConversationsContext.Provider value = { value } >
      {children}
    </ConversationsContext.Provider>
  )
}

function arrayEquality(array_A, array_B)
{
  if(array_A.lenght !== array_B.lenght) return false;

  array_A.sort();
  array_B.sort();

  return array_A.every((element, index) => 
  {
    return element === array_B[index];
  });
}
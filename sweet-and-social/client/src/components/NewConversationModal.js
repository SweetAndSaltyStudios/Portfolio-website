import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider.js';
import { useConversations } from '../contexts/ConversationsProvider.js';

export default function NewConversationModal({ closeModal }) 
{
    const [ selectedContactIDs, setSelectedContactIDs] = useState([]);
    const { contacts } = useContacts();
    const { createConversation } = useConversations();
    
    function handleSubmit(event)
    {
        event.preventDefault();

        createConversation(selectedContactIDs);

        closeModal();
    }

    function handleToggleChange(contactID)
    {
        setSelectedContactIDs(previousSelectedIDs => 
        {
            if(previousSelectedIDs.includes(contactID))
            {
                return previousSelectedIDs.filter(previousID => 
                {
                   return contactID !== previousID; 
                });
            }
            else
            {
                return [ ...previousSelectedIDs, contactID]
            }
        });
    }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit = { handleSubmit }>
        {
            contacts.map(contact => 
            (
                <Form.Group controlId = { contact.id } key = { contact.id }>
                    <Form.Check
                        type = 'checkbox'
                        value = { selectedContactIDs.includes(contact.id) }
                        label = { contact.name }
                        onChange = { () => handleToggleChange(contact.id) }
                    />
                </Form.Group>
            ))
        }
        
        <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}

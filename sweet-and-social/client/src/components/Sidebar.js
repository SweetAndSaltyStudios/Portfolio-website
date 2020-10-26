import React, { useState } from 'react';
import { Button, Nav, Tab, Modal } from 'react-bootstrap';
import Conversations from './Conversations.js';
import Contacts from './Contacts.js';
import NewConversationModal from './NewConversationModal';
import NewContactModal from './NewContactModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ id }) 
{
    const [ activeKey, setActiveKey ] = useState(CONVERSATIONS_KEY);    
    const [ modalOpen, setModalOpen ] = useState(false);
    const isConversationActive = activeKey === CONVERSATIONS_KEY;

    function closeModal()
    {
        setModalOpen(false);
    }

    return (
        <div className = 'd-flex flex-column' style = {{width: ' 250px'}}>
            <Tab.Container activeKey = { activeKey } onSelect = { setActiveKey }>
                <Nav variant = 'tabs' className = 'justify-content-center'>

                    <Nav.Item>
                        <Nav.Link eventKey = { CONVERSATIONS_KEY }>Conversations</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey = { CONTACTS_KEY }>Contacts</Nav.Link>
                    </Nav.Item>

                </Nav>
                
                <Tab.Content className = 'border-right owerflow-auto flex-grow-1'>
                    <Tab.Pane eventKey = { CONVERSATIONS_KEY }>
                        <Conversations/>
                    </Tab.Pane>

                    <Tab.Pane eventKey = { CONTACTS_KEY }>
                        <Contacts/>
                    </Tab.Pane>
                </Tab.Content>
                
                <div className = 'p-2 border-top border-right small'>
                    MY ID: <span className = 'text-muted'>{id}</span>
                </div>
                
                <Button onClick = { () => setModalOpen(true) } className = 'rounded-0'>
                    New { isConversationActive ? 'Conversations' : 'Contacts' }
                </Button>

            </Tab.Container>

            <Modal show = { modalOpen } onHide = { closeModal }>
                { 
                    isConversationActive ? 
                    <NewConversationModal closeModal = { closeModal }/> :
                    <NewContactModal closeModal = { closeModal }/>
                }
            </Modal>
        </div>
    )
}

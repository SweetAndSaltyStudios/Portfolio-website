import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Conversations() {
    
    const { conversations, selectConversationOrder } = useConversations();

    return (
        <ListGroup variant = 'flush'>
        {
            conversations.map((conversation, order) => 
            (
                <ListGroup.Item 
                key = { order }
                action
                onClick = { () => { selectConversationOrder(order) } }
                active = { conversation.selected }
                >
                    { conversation.recipients.map(recipient => recipient.name).join(', ') }
                </ListGroup.Item>
            ))
        }
        </ListGroup>
    )
}

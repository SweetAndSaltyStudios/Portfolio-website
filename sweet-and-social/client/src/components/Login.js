import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

export default function Login( { onSubmitID }) 
{
    const idRef = React.createRef();

    function handleSubmit (event) 
    {
        event.preventDefault();

        onSubmitID(idRef.current.value);
    }

    function createNewRandomID()
    {
        onSubmitID(uuidV4());
    }

    return (
        <div>
            <Container className='align-items-center d-flex' style={{ height: '100vh'}}>
                <Form onSubmit={handleSubmit} className='w-100'>
                    <Form.Group>
                        <Form.Label>Enter Your ID </Form.Label>
                        <Form.Control type='Text' ref={idRef} required></Form.Control>
                    </Form.Group>
                    <Button type='submit' className='mr-2'>Login</Button>
                    <Button onClick={createNewRandomID} variant='secondary'>Create a new ID</Button>
                </Form>
            </Container>
        </div>
    )
}

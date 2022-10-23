import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoUrlRaf = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoUrlRaf.current.value);
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }
    return (

        <Form onSubmit={handleSubmit}>
            <h1>User profile</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control ref={photoUrlRaf} defaultValue={user?.photoURL} type="text" placeholder="photoUrl" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { LogInUser, setLoading } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        LogInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('please verify your email address')
                }
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message)
            })
            .finaly(() => {
                setLoading()
            })

    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <p className='text-danger'>{error}</p>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;
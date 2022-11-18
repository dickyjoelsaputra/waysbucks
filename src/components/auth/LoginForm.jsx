import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginForm({ Login, Show, Hide }) {
    const [user, setUser] = useState({ email: "", password: "" })

    const submitHandle = (e) => {
        e.preventDefault()
        // console.log(user)
        Login(user)
    }

    return (

        <Modal show={Show} onHide={Hide} centered>
            <Modal.Body>
                <div className='px-4'>
                    {/* Handle Error Disini */}
                    <h1 className='py-3 text-danger'><b>Login</b></h1>
                    <Form onSubmit={submitHandle}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='email'>Email address</Form.Label>
                            <div className='border border-danger rounded border-opacity-25' >
                                <Form.Control name='email' id='email' type="email" placeholder="Enter email"
                                    onChange={e => setUser({ ...user, email: e.target.value })}
                                    value={user.email}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='email'>Password</Form.Label>
                            <div className='border border-danger rounded border-opacity-25' >
                                <Form.Control name='password' id='password' type="password" placeholder="Enter password"
                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                    value={user.password}
                                />
                            </div>
                        </Form.Group>
                        <div className="d-grid gap-2 my-4">
                            <Button variant="danger" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                    <p>
                        <a className='text-decoration-none pe-auto' href='/#'><span className='text-body'>Dont have an account ?</span><span style={{ border: "none" }}
                            className='btn ps-1 mb-1'>Click here</span></a>
                    </p>
                </div >
            </Modal.Body>
        </Modal>


    )
}


import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {Button, Col, Container, Form, Row, Card, CardImg} from "react-bootstrap";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let allLocalStorage = Object.keys(localStorage);
    let length = allLocalStorage.length;

    function handleFormSubmit(e){
        e.preventDefault();

        for(let i =0; i<length; i++) {
            let emailRegistered = JSON.parse(localStorage.getItem(allLocalStorage[i])).email;
            let passwordRegistered = JSON.parse(localStorage.getItem(allLocalStorage[i])).password;
            
            if (email == emailRegistered && password == passwordRegistered){
                localStorage.setItem("loginstatus", JSON.stringify({'status': true, 'id': allLocalStorage[i]}));
                window.location='/';
                break;
            } else if (email != emailRegistered) {
                if(i < length) {
                    continue;
                } else {
                    alert('Email yang dimasukkan salah!');
                    break;
                }
            } else if(email == emailRegistered && password !== passwordRegistered) {
                alert('Password yang dimasukkan salah!');
                break;
            }
        }

    }

    return (
        <div className="d-flex align-items-center min-vh-100" style ={{ backgroundColor: '#1B232E'}}>
        <Container fluid>
                <Card className="border-0" style={{ backgroundColor: 'transparent', color: 'white' }}>
                    <Row className="g-0">
                        <Col className="d-sm-none d-md-inline d-none col-md-6">
                            <CardImg className="img-fluid rounded-start"
                                    style={{ height: 500, innerWidth: '50vw', objectFit: 'cover' }}
                                    src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMHB1cnBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60">
                            </CardImg>
                        </Col>
                        <Col className="col-md-6 d-flex align-items-center px-4">
                        <Card.Body>
                            <p className="text-md-start text-sm-center text-center fs-2 fw-bold py-0">Login to MocoFlip</p>
                            <p className="text-sm-center text-md-start text-center">Haven't an account? <Link className="fw-bold" to="/signup">Sign Up</Link></p>
                            <Form onSubmit={(e) => handleFormSubmit(e)}>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className="form-label">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} value={email} required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="form-label">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} value={password} required/>
                                </Form.Group>

                                <div>
                                    <div className="d-grid">
                                    <Button type="submit" className="btn btn-primary" id="btn-submit" value="Login">Sign In</Button>
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                        </Col>
                    </Row>
                </Card> 
        </Container>  
        </div>
    );
};

export default LoginPage;
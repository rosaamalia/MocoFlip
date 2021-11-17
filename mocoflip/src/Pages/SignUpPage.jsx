import React, { useState} from "react";
import { Link } from "react-router-dom";
import {Button, Col, Container, Form, Row, Card, CardImg, Alert} from "react-bootstrap";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    function handleFormSubmit(e){
        e.preventDefault();

        let emailRegistered = JSON.parse(localStorage.getItem("email"));
        let usernameRegistered = JSON.parse(localStorage.getItem("username"));

        if(!email || !username || !password || !confirmPass) {
            alert('Mohon isi form terlebih dahulu.')
        } else if(email == emailRegistered) {
            alert('Email yang digunakan sudah terdaftar. Mohon masukkan email lain.');
        } else if(username == usernameRegistered) {
            alert('Username yang digunakan sudah terdaftar. Mohon masukkan username lain.');
        }else if(password !== confirmPass){
            alert('Konfirmasi password tidak sama.')
        } else {
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("username", JSON.stringify(username));
            localStorage.setItem("password", JSON.stringify(password));

            window.alert('Pendaftaran berhasil! Silahkan Log In dengan akun yang sudah didaftarkan.');
            window.location='/login';
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
                                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80">
                            </CardImg>
                        </Col>
                        <Col className="col-md-6 d-flex align-items-center px-4">
                        <Card.Body>
                            <p className="text-md-start text-sm-center text-center fs-2 fw-bold py-0">Sign Up to MocoFlip</p>
                            <p className="text-sm-center text-md-start text-center">Already have an account? <Link to="/login">Log In</Link></p>
                            <Form onSubmit={(e) => handleFormSubmit(e)}>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className="form-label">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(event) => setEmail(event.target.value)} value={email} required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label className="form-label">Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" name="username" onChange={(event) => setUsername(event.target.value)} value={username} required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="form-label">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" name="password" onChange={(event) => setPassword(event.target.value)} value={password} required/>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="confirm-password">
                                    <Form.Label className="form-label">Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Re-type password" onChange={(event) => setConfirmPass(event.target.value)} value={confirmPass} required/>
                                </Form.Group>
                                
                                <div>
                                    <div className="d-grid">
                                    <Button type="submit" className="btn btn-primary" id="btn-submit">Sign Up</Button>
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

export default SignUpPage;
import React from "react";
import {Button, Col, Container, Form, Row, Card, CardImg} from "react-bootstrap";

function LoginPage() {
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
                            <p className="text-sm-center text-md-start text-center">Haven't an account? <a className="fw-bold" href="/signup">Sign Up</a></p>
                            <Form id="form_id" method="post" name="myform">
                                <Form.Group className="mb-3">
                                    <Form.Label controlId="email" className="form-label">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label controlId="password" className="form-label">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password"></Form.Control>
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
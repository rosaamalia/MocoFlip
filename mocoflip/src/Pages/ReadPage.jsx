import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {Button, Col, Container, Form, Row, Card, CardImg} from "react-bootstrap";

function LoginPage() {
    let url = "http://play.google.com/books/reader?id=DZ7cZags_xwC&hl=&as_brr=7&printsec=frontcover&source=gbs_api";
    return (
        <div className="d-flex align-items-center min-vh-100" style ={{ backgroundColor: '#1B232E'}}>
        <Container fluid>
            <iframe src={url} title="Iframe Example" style={{ height: 500}}></iframe>
        </Container>  
        </div>
    );
};

export default LoginPage;
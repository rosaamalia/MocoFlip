import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {Button, Col, Container, Form, Row, Card, CardImg} from "react-bootstrap";
import BookViewer from "../components/BookViewer/BookViewer";

function LoginPage(props) {
    return (
        <div className="d-flex align-items-center min-vh-100" style ={{ backgroundColor: '#1B232E'}}>
        <Container fluid>
            <BookViewer bookItem={props.bookItem}></BookViewer>
        </Container>  
        </div>
    );
};

export default LoginPage;
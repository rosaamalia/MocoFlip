import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import {Button, Col, Container, Form, Row, Card, CardImg} from "react-bootstrap";
import styled from 'styled-components';
import BookViewer from "../components/BookViewer/BookViewer";
import BlockLoading from "../components/Loading/BlockLoading";

export const ButtonBack = styled(Button)`
    width: 100px;
    padding: 3px;
    color: white;
    border-style: none;
    background-color: #362565;
    &:hover{
        background-color: #EC6A9D;
        color: white;
    }
`;

function LoginPage() {
    const { bookId } = useParams();
    const [book, setBook] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(null)

    console.log(book);

    useEffect(() => {
        fetch("https://books.googleapis.com/books/v1/volumes/" + bookId)
         .then(res => {
             return res.json();
         })
         .then(data => {
             setBook(data);
             setisLoading(false);
         })
     }, []);

    if(isLoading) {
        return (
            <div className="d-flex align-items-center min-vh-100 p-5" style ={{ backgroundColor: '#1B232E', color:'white' }}>
                <BlockLoading></BlockLoading>
            </div>
        )
    }

    return (
        <div className="d-flex align-items-center min-vh-100 p-5" style ={{ backgroundColor: '#1B232E', color:'white' }}>
            <Row>
            <Col>
                <Link to="/list"><ButtonBack>Back</ButtonBack></Link>
            </Col>
            <Col>
                <Container fluid>
                    <BookViewer bookId={bookId}></BookViewer>
                </Container>  
            </Col>
            <Col>  
                <p style={{ fontSize: 24, fontWeight: 600 }}>{book.volumeInfo.title}</p>
                <p style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Book Information</p>
                <p style={{ fontSize: 14, margin: 0 }}>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : null}</p>
                <p style={{ fontSize: 14, margin: 0 }}>Publisher: {book.volumeInfo.publisher}</p>
                <p style={{ fontSize: 14 }}>Published Date: {book.volumeInfo.publishedDate}</p>
                <p style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Description</p>
                <p style={{ fontSize: 14 }}>{book.volumeInfo.description ? book.volumeInfo.description : book.volumeInfo.subtitle}</p>
            </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
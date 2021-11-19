import React, { useState } from "react";  
import axios from 'axios';  
import { Card, Button, Modal, Row, Col, Container } from 'react-bootstrap';  
import styled from "styled-components"

export const Text = styled.p`
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const ButtonDetail = styled(Button)`
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

export const ModalDetail = styled(Modal)`
    
`;

function GoogleBooksSearch() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    const [apiKey, setApiKey] = useState("AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88")  
  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    } 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    function handleShow(){
        setShow(true);
    }

    return (  
        <div style={{ backgroundColor: '#1B232E' , height: '100%'}} >
        <form onSubmit={handleSubmit}>
            <div class="container fluid">  
            <div className="card-header main-search">  
                <div className="row h-3 mt-5">  
                    <div className="col-lg-12 mt-2" style={{position: "relative", display:'flex', flexWrap:'wrap', alignItems:'stretch', width:"100%"}}>  
                        <input onChange={handleChange} className="form-control rounded" placeholder="Search Book. . ." type="text"  aria-describedby="search-addon"/> 
                        <button type="button" className="btn btn-secondary btn-block search-btn mt-3">Search</button> 
                    </div>  
                </div>  
            </div> 
            </div> 
            <div class="container fluid d-flex flex-wrap justify-content-center p-5  " >
                    {result.map(book => (  
                        <div>  
                            <Row className="gap-2 p-0" >
                            <Col size="lg-6" className="mx-3 my-3">
                            <Card style={{ width: 450, backgroundColor: '#F2F2F2', padding: 0 }}>
                                <Row>
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} style={{ width: 170, height: 230, objectFit: 'cover' }}></img>
                                    <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                        <Text style={{ fontSize: 18, fontWeight: 600 }}>{book.volumeInfo.title}</Text>
                                        <Text style={{ fontSize: 14 }}>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : null}</Text>
                                        <ButtonDetail onClick={handleShow}>Detail</ButtonDetail>
                                    </Col>
                                </Row>
                            </Card>  
                            </Col>
                            <ModalDetail size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Book Detail</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} style={{ width: 170, height: 230, objectFit: 'cover' }}></img>
                                    <Col>
                                        <Text style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{book.volumeInfo.title}</Text>
                                        <Text style={{ fontSize: 14 }}>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : null} &nbsp;•&nbsp; Published Date: {book.volumeInfo.publishedDate}</Text>
                                        <Text style={{ fontSize: 14 }}>{book.volumeInfo.description  ? book.volumeInfo.description  : book.volumeInfo.subtitle}</Text>
                                        {book.accessInfo.webReaderLink ? <ButtonDetail>Read Book</ButtonDetail> : null}
                                    </Col>
                                </Row>
                            </Modal.Body>
                            </ModalDetail>
                            </Row>
                        </div>  
                    ))}  
                   </div>
            </form>
            </div>
    )  
}  
  
export default GoogleBooksSearch 
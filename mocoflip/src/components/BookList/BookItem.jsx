import { useState } from "react";
import { Container, Row, Card, Button, Col, Modal } from "react-bootstrap";
import { Link } from 'react-dom';
import styled from 'styled-components';

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

function BookItem(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    function handleShow(){
        setShow(true);
    }

    return (
        <>
            <Card style={{ width: 500, backgroundColor: '#F2F2F2', padding: 0 }}>
                <Row>
                    <img src={props.bookItem.volumeInfo.imageLinks.thumbnail} style={{ width: 170, height: 230, objectFit: 'cover' }}></img>
                    <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={{ fontSize: 18, fontWeight: 600 }}>{props.bookItem.volumeInfo.title}</Text>
                        <Text style={{ fontSize: 14 }}>{props.bookItem.volumeInfo.authors ? props.bookItem.volumeInfo.authors.join(", ") : null}</Text>
                        <ButtonDetail onClick={handleShow}>Detail</ButtonDetail>
                    </Col>
                </Row>
            </Card>

            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Book Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <img src={props.bookItem.volumeInfo.imageLinks.thumbnail} style={{ width: 170, height: 230, objectFit: 'cover' }}></img>
                        <Col>
                            <Text style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{props.bookItem.volumeInfo.title}</Text>
                            <Text style={{ fontSize: 14 }}>Author: {props.bookItem.volumeInfo.authors ? props.bookItem.volumeInfo.authors.join(", ") : null} &nbsp;•&nbsp; Published Date: {props.bookItem.volumeInfo.publishedDate}</Text>
                            <Text style={{ fontSize: 14 }}>{props.bookItem.volumeInfo.description ? props.bookItem.volumeInfo.description : props.bookItem.volumeInfo.subtitle}</Text>
                            {props.bookItem.accessInfo.webReaderLink ? <ButtonDetail onClick={(e) => {e.preventDefault(); window.location.href='/read'}} bookItem={props.bookItem}>Read Book</ButtonDetail> : null}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BookItem;
import React, {useState} from "react";
import {Col, Container, Card, Button,  Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
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
export function BookCard(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    function handleShow(){
        setShow(true);
    }
    return(
        <React.Fragment>
            <Card style={{ width: 500, backgroundColor: '#F2F2F2', padding: 0 }}>
                <Row>
                    <img src={props.image} style={{ width: 170, height: 230, objectFit: 'cover' }}></img>
                    <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={{ fontSize: 18, fontWeight: 600 }}>{props.title}</Text>
                        <Text style={{ fontSize: 14 }}>{props.authors ? props.authors.join(", ") : null}</Text>
                        <ButtonDetail onClick={handleShow}>Detail</ButtonDetail>
                    </Col>
                </Row>
            </Card>

            <ModalDetail size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Book Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <img src={props.image} style={{ width: 170, height: 230, objectFit: 'cover' }}></img>
                        <Col>
                            <Text style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{props.title}</Text>
                            <Text style={{ fontSize: 14 }}>Author: {props.authors ? props.authors.join(", ") : null} &nbsp;•&nbsp; Published Date: {props.publish}</Text>
                            <Text style={{ fontSize: 14 }}>{props.description ? props.description : props.subtitle}</Text>
                            {props.web ? <Link to={"/read/"+props.id}><ButtonDetail>Read Book</ButtonDetail></Link> : null}
                        </Col>
                    </Row>
                </Modal.Body>
            </ModalDetail>
        </React.Fragment>
    )
}


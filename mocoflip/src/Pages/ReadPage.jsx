import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import {Button, Col, Container, Form, Row, Card, CardImg} from "react-bootstrap";
import styled from 'styled-components';
import BookViewer from "../components/BookViewer/BookViewer";
import BlockLoading from "../components/Loading/BlockLoading";

export const ButtonBack = styled(Button)`
    width: 100px;
    padding: 3px;
    margin: 20px;
    color: white;
    border-style: none;
    background-color: #362565;
    &:hover{
        background-color: #EC6A9D;
        color: white;
    }
`;

function ReadPage() {
    const { bookId } = useParams();

    return (
        <div style ={{ backgroundColor: '#1B232E' }}>
            <Link to="/list"><ButtonBack>Back</ButtonBack></Link>
            <BookViewer bookId={bookId}></BookViewer> 
        </div>
    )
};

export default ReadPage;
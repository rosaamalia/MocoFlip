import React, {useContext, useEffect, useState} from "react";
import CardBookList from "../components/CardBookList"
import { Container, Row, Card, Button} from "react-bootstrap";
import FilterCategory from "../components/FilterCategory";
import background from "../images/Lakeside.png"

function BookListPage() {


    return (
        <Container className="align-items-center">
            <div style={{background: `url{${background}}`}}>
            <Row>
                <FilterCategory/>
                <CardBookList/> 
            </Row>
            </div>
            
        </Container>   
    )
}

export default BookListPage;
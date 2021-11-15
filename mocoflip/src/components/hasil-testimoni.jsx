import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./rating"


export default function HasilTestimoni(){
    return(
        <Card className="col-lg-8 col-md-8 col-sm-12 mx-lg-auto mx-md-auto mb-3">
        <Card.Body>
            <Card.Title>Nama</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            <Rating/>
            </Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    )
}
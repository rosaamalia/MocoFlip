import React from "react";
import {Col, Container, Card, Button} from "react-bootstrap";
import image from "../images/HarryPotter.png";

function BookCard(props){
    
    return(
        <Col lg={3} md={4} sm={6} xs={6}>
        <Container>
            <Card className="mt-2 bg-dark " style={{color : 'white'}}>
            <Button className="align-items-center p-2 text-center" variant="none">
                <Card.Img className="" variant="top" src={props.image} alt="gambar1" 
                    style={{ 
                    maxHeight : '18em',
                    borderRadius: '0' }}/>
            </Button>
            </Card>
        </Container>
        </Col>
    )
}

export default BookCard
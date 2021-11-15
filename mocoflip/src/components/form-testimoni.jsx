import React from "react";
import { Title, Testi } from "../style/testimonipagestyle";
import logo from "../images/MocoFLip.png"
import { Form, Button, Card} from "react-bootstrap";
import Rating from "./rating"

export default function FormTestimoni(){
    return(
        <Card style={{
                backgroundColor: '#C697AD',
              }} className="col-lg-6 col-md-12 col-sm-12 mx-lg-auto mx-md-auto my-lg-auto my-md-auto"
        >
        <Card.Img src={logo} className=" w-25 h-25 rounded mx-lg-auto mx-md-auto mx-sm-auto d-block mb-3 mt-3"/>
        <Card.Body>
           <Title>Bagaimana Pengalamanmu Menggunakan Mocoflip?</Title>
           <Testi className="col-lg-12 col-md-12 col-sm-12 mb-3">Tuliskan testimoni kamu disini!</Testi>
           <Form>
                <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" placeholder="nama kamu" />
                </Form.Group>
                <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12"  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Testimoni</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="testimoni..." />
                </Form.Group>
                <Rating/>
                <Button style={{
                backgroundColor: '#282262',
              }} variant="outline-light" type="submit" className="mt-3 col-lg-3 col-md-3 col-sm-3"> Kirim</Button>
            </Form>
        </Card.Body>
        </Card>
            
    )
}

import React, {useState} from "react";
import { Card, Container, Row ,Col} from "react-bootstrap";
import Rating from "./rating"
import FormTesti from "./formtesti";

 const TestimoniNew=()=>{
    const [testimonis, setTestimonis] = useState([
                {
                    nama: 'ghina', 
                    testimoni: 'good bgt sih ini :)',
                }
            ]);
        
            const addTestimoni = (data) =>{
                setTestimonis([...testimonis,{ nama : data.nama, testimoni : data.testimoni}]);
        
            }

    return(
        <Container>
            <Row>
                <Col>
                <FormTesti addTestimoni={addTestimoni}/>
                </Col>
                <Col>
                    {testimonis.map(data=>{
                        return (
                            <Card style={{
                                backgroundColor: '#C36893',
                                maxHeight: 350,
                                minWidth: 300,
                    
                              }} className="col-lg-12 col-md-12 col-sm-12 mx-lg-auto mx-md-auto mt-3 ">
                    
                            <Card.Body key={data.nama}>
                            <Card.Title>{data.nama}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                            <Rating/>
                            </Card.Subtitle>
                            <Card.Text>
                                {data.testimoni}
                            </Card.Text>
                            </Card.Body>

                            </Card>
                                            
                        )
                    }
                       )
                  }
                </Col>
            </Row>
            
            
       
        </Container>
        
    )
}

export default TestimoniNew;
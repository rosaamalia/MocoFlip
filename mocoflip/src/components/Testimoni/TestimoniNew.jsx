import React, {useState} from "react";
import { Card, Container, Row ,Col} from "react-bootstrap";
import Rating from "./Rating";
import FormTesti from "./FormTesti";

 const TestimoniNew=()=>{
    const [testimonis, setTestimonis] = useState([
                {
                    nama: 'Ghina Fairuz', 
                    testimoni: 'good banget sih :)',
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
                <Col className="mt-3">
                    <p style={{ color: 'white', fontWeight: 700, fontSize: 28 }}>Testimoni</p>
                    {testimonis.map(data=>{
                        return (
                            // <Card style={{
                            //     backgroundColor: '#CC7494',
                            //     maxHeight: 350,
                            //     minWidth: 300,
                    
                            //   }} className="col-lg-12 col-md-12 col-sm-12 mx-lg-auto mx-md-auto mt-3 ">
                    
                            // <Card.Body key={data.nama}>
                            // <Card.Title>{data.nama}</Card.Title>
                            // <Card.Subtitle className="mb-2 text-muted">
                            // <Rating/>
                            // </Card.Subtitle>
                            // <Card.Text>
                            //     {data.testimoni}
                            // </Card.Text>
                            // </Card.Body>

                            // </Card>

                            <Card style={{ maxHeight: 350, minWidth: 300 }} className="col-lg-12 col-md-12 col-sm-12 mx-lg-auto mx-md-auto mt-3 ">
                                <Card.Header key={data.nama} style={{ fontSize: 20}}>{ data.nama }</Card.Header>
                                <Card.Body>
                                    <Rating/>
                                    <Card.Text>
                                        { data.testimoni }
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
import React from "react";
// import FormTestimoni from "../components/form-testimoni";
import { Container} from "react-bootstrap";
import TestimoniNew from "../components/testimoninew";


function TestimoniPage() {
    return (
        <Container fluid style={{
            backgroundColor: '#1B232E'
          }} className="py-2 px-2">
            <TestimoniNew/>
        </Container>
    )
}

export default TestimoniPage;
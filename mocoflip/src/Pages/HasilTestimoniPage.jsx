import React from "react";
import HasilTestimoni from "../components/hasil-testimoni";
import { Container} from "react-bootstrap";

function TestimoniPage() {
    return (
        <Container fluid style={{
            backgroundColor: '#1B232E',
            padding: 10,
            minHeight: 1000,

          }}>
            <HasilTestimoni/>
        </Container>
    )
}

export default TestimoniPage;
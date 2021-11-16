import React from "react";
import HasilTestimoni from "../components/hasil-testimoni";
import { Container} from "react-bootstrap";

function HasilTestimoniPage() {
    return (
        <Container fluid style={{
            backgroundColor: '#1B232E',
            minHeight: 1000,

          }} className="py-3 px-2">
            <HasilTestimoni/>
        </Container>
    )
}

export default HasilTestimoniPage;
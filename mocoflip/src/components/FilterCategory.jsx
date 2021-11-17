import React from "react";
import {Container, Dropdown} from "react-bootstrap";

function FilterCategory(){
    return(
    <Container className="mb-5">
        <Dropdown className="d-flex flex-row-reverse mx-4">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        Category
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Adventure action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </Container>
    )
}

export default FilterCategory

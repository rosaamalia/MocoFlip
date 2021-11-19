import React, {useContext, useEffect, useState} from "react";
import { Container, Row, Dropdown, DropdownButton } from "react-bootstrap";
import styled from 'styled-components';
import BookItem from '../components/BookList/BookItem';
import BlockLoading from '../components/Loading/BlockLoading';

function BookListPage() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [scienceBooks, setScienceBooks] = useState([]);
    const [technologyBooks, setTechnologyBooks] = useState([]);
    const [astronomyBooks, setAstronomyBooks] = useState([]);
    
    useEffect(() => {
       fetch('https://books.googleapis.com/books/v1/volumes?q=education&filter=free-ebooks')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBooks(data);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        fetch('https://books.googleapis.com/books/v1/volumes?q=science&filter=free-ebooks')
         .then(res => {
             return res.json();
         })
         .then(data => {
             setScienceBooks(data);
             setLoading(false);
         })
     }, []);
    
     useEffect(() => {
        fetch('https://books.googleapis.com/books/v1/volumes?q=technology&filter=free-ebooks')
         .then(res => {
             return res.json();
         })
         .then(data => {
             setTechnologyBooks(data);
             setLoading(false);
         })
     }, []);

     useEffect(() => {
        fetch('https://books.googleapis.com/books/v1/volumes?q=astronomy&filter=free-ebooks')
         .then(res => {
             return res.json();
         })
         .then(data => {
             setAstronomyBooks(data);
             setLoading(false);
         })
     }, []);
    
    if(loading) {
        return (
            <Container fluid className="d-flex flex-wrap justify-content-center min-vh-100" style={{ backgroundColor: '#1B232E', alignItems: 'center' }}>
                <BlockLoading/>
            </Container>
        )
    }

    if(books == []) {
        return (
            <Container fluid className="d-flex flex-wrap justify-content-center min-vh-100" style={{ backgroundColor: '#1B232E', alignItems: 'center' }}>
                <p>Error to fetch data</p>
            </Container>
        )
    }

    return (
        <Container fluid className="d-flex flex-wrap justify-content-center p-5" style={{ backgroundColor: '#1B232E' }}>
                <Row style={{ color: 'white', textAlign: 'center'}}>
                    <p className="text-center fs-2 fw-bold py-0 my-0">Book List</p>
                    <p className="text-center" style={{ marginBottom: 20 }}>Find your favorite book!</p>
                    <Dropdown style={{ marginBottom: 30}}>
                        <Dropdown.Toggle variant="secondary" style={{ backgroundColor: '#BE428D', borderStyle: 'none' }}>
                            Choose Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item onClick={() => {setBooks(scienceBooks)}} value="Science">Science</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setBooks(technologyBooks)}} value="Technology">Technology</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setBooks(astronomyBooks)}} value="Astronomy">Astronomy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row className="justify-content-center gap-5 p-0">
                    {books.items ? books.items.map(function(book) {
                        return (
                            <BookItem bookItem={book}/>
                        )
                    }) : setLoading(true) }
                </Row>
        </Container>   
    )
}

export default BookListPage;
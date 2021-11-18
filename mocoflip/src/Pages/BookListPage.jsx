import React, {useContext, useEffect, useState} from "react";
import { Container, Row, Button } from "react-bootstrap";
import styled from 'styled-components';
import BookItem from '../components/BookList/BookItem';
import BlockLoading from '../components/Loading/BlockLoading';

function BookListPage() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
       fetch('https://books.googleapis.com/books/v1/volumes?q=physics&filter=free-ebooks')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBooks(data);
            setLoading(false);
        })
    }, []);

    let bookItems = books.items;
    
    if(loading) {
        return (
            <Container fluid className="d-flex flex-wrap justify-content-center min-vh-100" style={{ backgroundColor: '#1B232E', alignItems: 'center' }}>
                <BlockLoading/>
            </Container>
        )
    }

    return (
        <Container fluid className="d-flex flex-wrap justify-content-center p-5" style={{ backgroundColor: '#1B232E' }}>
                <Row style={{ color: 'white', textAlign: 'center'}}>
                    <p className="text-center fs-2 fw-bold py-0 my-0">Book List</p>
                    <p className="text-center" style={{ marginBottom: 30 }}>Find your favorite book!</p>
                </Row>
                <Row className="justify-content-center gap-5 p-0">
                    {bookItems.map(function(book, i) {
                        return (
                            <BookItem bookItem={book}/>
                        )
                    })}
                </Row>
        </Container>   
    )
}

export default BookListPage;
import React, {useContext, useState} from "react";
import { BookCard } from "../components/BookCard"
import { BooksListContext } from "../context/listbooks-context";
import FilterCategory from "../components/FilterCategory"
import  { Container, Row, Dropdown}  from "react-bootstrap"
import { BookShow } from "../components/BookShow";
import { propTypes } from "react-bootstrap/esm/Image";



function BookListPage(){
    const {books, science, technology, astronomy, loading, error} = useContext(BooksListContext)

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error != null){
        return <h1>System Error</h1> 
    }
    const onClickHandler = () => {
        books();
    }

    return <React.Fragment>
            <Container fluid className="d-flex flex-wrap justify-content-center p-5" style={{ backgroundColor: '#1B232E' }}>
                <Row style={{ color: 'white', textAlign: 'center'}}>
                    <p className="text-center fs-2 fw-bold py-0 my-0">Book List</p>
                    <p className="text-center" style={{ marginBottom: 20 }}>Find your favorite book!</p>
                    <Dropdown style={{ marginBottom: 30}}>
                        <Dropdown.Toggle variant="secondary" style={{ backgroundColor: '#BE428D', borderStyle: 'none' }}>
                            Choose Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item onClick={() => {onClickHandler(science)}} value="Science">Science</Dropdown.Item>
                            <Dropdown.Item onClick={() => {onClickHandler(technology)}} value="Technology">Technology</Dropdown.Item>
                            <Dropdown.Item onClick={() => {onClickHandler(astronomy)}} value="Astronomy">Astronomy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row className="justify-content-center gap-5 p-0">
                {
                    Array.isArray(books) &&
                    books.map((book, id) => {
                    return <BookCard key={id} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks.smallThumbnail} authors={book.volumeInfo.authors} description={book.volumeInfo.description} subtitle={book.volumeInfo.subtitle} web={book.accessInfo.webReaderLink} publish={book.volumeInfo.publishedDate} />
                    }) 
           
                }
                </Row>
            </Container>   
    </React.Fragment>
}
export default BookListPage
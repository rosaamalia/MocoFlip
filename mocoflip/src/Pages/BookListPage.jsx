import React, {useContext, useState} from "react";
import { BookCard } from "../components/BookCard"
import { BooksListContext } from "../context/listbooks-context";
import FilterCategory from "../components/FilterCategory"
import  { Container, Row, Dropdown}  from "react-bootstrap"
// import { BookShow } from "../components/BookShow";
import BlockLoading from '../components/Loading/BlockLoading';



function BookListPage(){
    const {books, science, technology, astronomy, loading, error} = useContext(BooksListContext)
    const [bookList, setBookList] = useState([]);
    // setBookList(books);
    // console.log(bookList);

    if(loading){
        return (
            <Container fluid className="d-flex flex-wrap justify-content-center min-vh-100" style={{ backgroundColor: '#1B232E', alignItems: 'center' }}>
                <BlockLoading/>
            </Container>
        )
    }
    if(error != null){
        return (
            <Container fluid className="d-flex flex-wrap justify-content-center min-vh-100" style={{ backgroundColor: '#1B232E', alignItems: 'center' }}>
                <p>Error</p>
            </Container>
        )
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
                            <Dropdown.Item onClick={() => {setBookList(science)}} value="Science">Science</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setBookList(technology)}} value="Technology">Technology</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setBookList(astronomy)}} value="Astronomy">Astronomy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row className="justify-content-center gap-5 p-0">
                {
                    bookList.length != 0 ?
                    bookList.map((book, id) => {
                        return <BookCard key={id} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks.smallThumbnail} authors={book.volumeInfo.authors} description={book.volumeInfo.description} subtitle={book.volumeInfo.subtitle} web={book.accessInfo.webReaderLink} publish={book.volumeInfo.publishedDate} id={book.id} />
                    }) :
                    books.map((book, id) => {
                        return <BookCard key={id} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks.smallThumbnail} authors={book.volumeInfo.authors} description={book.volumeInfo.description} subtitle={book.volumeInfo.subtitle} web={book.accessInfo.webReaderLink} publish={book.volumeInfo.publishedDate} id={book.id} />
                    })

                }
                </Row>
            </Container>   
    </React.Fragment>
}
export default BookListPage
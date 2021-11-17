import React, {useContext}  from "react";
import BookCard from "../components/BookCard"
import { BooksListContext } from "../components/context/listbooks-context"


function CardBookList() {

    const {books, loading, error} = useContext(BooksListContext)

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error != null){
        return <h1>System Error</h1> 
    }

    return(
        <React.Fragment>
        {
            books &&
            books.map((book, id) => {
                return <BookCard key={id} title={book.title} authors={book.authors} subjects={book.subjects} image={book.image} ></BookCard>
            })
        }
        </React.Fragment>
    )
}
export default CardBookList;
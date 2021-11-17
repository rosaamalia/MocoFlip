import React, {createContext, useEffect, useState} from "react";
import { BOOK_ID_LIST, generateURLtoGetBook } from "../db/books";


//helper
async function FetchAllBook(){
    const urls = BOOK_ID_LIST.map(id => generateURLtoGetBook(id))
    const books= []
    for(let i=0; i < urls.length; i++){
        const bookJSON = await fetch(urls[i])
        const bookData = await bookJSON.json()
        books.push(bookData)
    }

    //untuk then yang di useEffect jadi menggunakan resolve
    return Promise.resolve(books)
}

const initialBooks = []

export const BooksListContext = createContext(initialBooks)


function BookListProvider(props) {

    const [booksState, setBooksState] = useState(initialBooks)
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        FetchAllBook()
        .then(books => {
            setBooksState(books)
            setisLoading(false)
    }).catch(error => {
        setError(error)
        setisLoading(false)
    })
},[])

    const value =  {
        books: booksState,
        loading: isLoading,
        error: error,
    }

    return <BooksListContext.Provider value={value}>
        {props.childern}
    </BooksListContext.Provider>
}

export default BookListProvider;
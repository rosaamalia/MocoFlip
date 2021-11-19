import React, {createContext, useEffect, useState} from "react";
import { BOOK_ID_LIST, generateURLtoGetBook } from "../components/db/books";

const initialBooks = []

export const BooksListContext = createContext(initialBooks)


export function BookListProvider(props) {

    
    const [booksState, setBooksState] = useState(initialBooks)
    const [scienceBooks, setScienceBooks] = useState(initialBooks);
    const [technologyBooks, setTechnologyBooks] = useState(initialBooks);
    const [astronomyBooks, setAstronomyBooks] = useState(initialBooks);
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function theBook() {
            try{
            const response = await fetch("https://books.googleapis.com/books/v1/volumes?q=education&filter=free-ebooks");
            if( response.ok){
                const json = await response.json();
                const data = json.items;
                setBooksState(data)
                setisLoading(false);
            }else{
                throw response
            }
        } catch(e){
            setError(e)
            setisLoading(false)}
        }
        theBook();
    },[])

    useEffect(() => {
        async function theBook() {
            try{
            const response = await fetch("https://books.googleapis.com/books/v1/volumes?q=science&filter=free-ebooks");
            if( response.ok){
                const json = await response.json();
                const data = json.items;
                setScienceBooks(data)
                setisLoading(false);
            }else{
                throw response
            }
        } catch(e){
            setError(e)
            setisLoading(false)}
        }
        theBook();
    },[])

    useEffect(() => {
        async function theBook() {
            try{
            const response = await fetch("https://books.googleapis.com/books/v1/volumes?q=technology&filter=free-ebooks");
            if( response.ok){
                const json = await response.json();
                const data = json.items;
                setTechnologyBooks(data)
                setisLoading(false);
            }else{
                throw response
            }
        } catch(e){
            setError(e)
            setisLoading(false)}
        }
        theBook();
    },[])

    useEffect(() => {
        async function theBook() {
            try{
            const response = await fetch("https://books.googleapis.com/books/v1/volumes?q=astronomy&filter=free-ebooks");
            if( response.ok){
                const json = await response.json();
                const data = json.items;
                setAstronomyBooks(data)
                setisLoading(false);
            }else{
                throw response
            }
        } catch(e){
            setError(e)
            setisLoading(false)}
        }
        theBook();
    },[])



    const value =  {
        books: booksState,
        science: scienceBooks,
        technology : technologyBooks,
        astronomy : astronomyBooks,
        loading: isLoading,
        error: error
        
    }

    return <BooksListContext.Provider value={value}>
        {props.children}
    </BooksListContext.Provider>
}



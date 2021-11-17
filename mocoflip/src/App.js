import MainRouter from "./routers/MainRouter";
import BookListProvider from "./components/context/listbooks-context";

function App(){
    return (
    <BookListProvider>
       <MainRouter />;
    </BookListProvider>
    )
}

export default App;
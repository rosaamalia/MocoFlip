import React from "react";
import MainRouter from "./routers/MainRouter";
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./Pages/HomePage";




function App(){
    return (
        <Router>
            <MainRouter />
            <HomePage />
        </Router>
    ); 
}

export default App;
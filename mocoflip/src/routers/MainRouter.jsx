import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import BookListPage from "../Pages/BookListPage";
import BookmarkPage from "../Pages/BookmarkPage";
import TestimoniPage from "../Pages/TestimoniPage";
import SearchPage from "../Pages/SearchPage";

function MainRouter(){
    return(
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/login" component={LoginPage} exact/>
            <Route path="/signup" component={SignUpPage} exact/>
            <Route path="/list" component={BookListPage} exact/>
            <Route path="/bookmark" component={BookmarkPage} exact/>
            <Route path="/testimoni" component={TestimoniPage} exact/>
            <Route path="/search" component={SearchPage} exact/>
        </Switch>
    );
}

export default MainRouter;
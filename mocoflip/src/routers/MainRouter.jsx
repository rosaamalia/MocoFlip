import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import BookListPage from "../pages/BookListPage";
import BookmarkPage from "../pages/BookmarkPage";
import TestimoniPage from "../pages/TestimoniPage";
import SearchPage from "../pages/SearchPage";

function MainRouter(){
    return(
        <Router>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/login" component={LoginPage} exact/>
                <Route path="/signup" component={SignUpPage} exact/>
                <Route path="/list" component={BookListPage} exact/>
                <Route path="/bookmark" component={BookmarkPage} exact/>
                <Route path="/testimoni" component={TestimoniPage} exact/>
                <Route path="/search" component={SearchPage} exact/>
            </Switch>
        </Router>
    )
}

export default MainRouter;
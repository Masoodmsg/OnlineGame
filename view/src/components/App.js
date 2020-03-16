import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Login from './accounting/Login'


function App(props) {

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )


}

export default App


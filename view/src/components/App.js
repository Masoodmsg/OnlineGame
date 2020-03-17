import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import Login from './accounting/Login';


function App(props) {

    return (
        <>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>

        </>
    );


}

export default withRouter(App);


import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import Login from './accounting/Login';
import Go from './games/Go';

function App(props) {

    return (
        <>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/game/go" component={Go} />
            </Switch>

        </>
    );


}

export default withRouter(App);


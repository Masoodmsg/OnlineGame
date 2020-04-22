import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import Login from './accounting/Login';
import Go from './games/Go';

function App(props) {


    return (
        <>
            <div style={{ height: '50px' }}>
            {
                 localStorage.getItem('user') ?
                   
                        <>
                            <Link to='/game/go' style={{ marginRight: '10px' }}>Go</Link>
                            <a to='/login' className="link" onClick={() => { localStorage.removeItem('user'); props.history.push('/') }}>خروج</a>
                        </>
                        :
                        <Link to='/login' style={{ marginRight: '10px' }}>ورود</Link>
            }
            </div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/game/go" component={Go} />
            </Switch>

        </>
    );


}

export default withRouter(App);


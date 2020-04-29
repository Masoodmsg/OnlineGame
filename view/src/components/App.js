import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import Login from './accounting/Login';
import Go from './games/Go';
import FindOpponent from './player/FindOpponent';
import Backgommon from './games/Backgommon';

function App(props) {


    return (
        <>
            <div style={{ height: '50px' }}>
            {
                 localStorage.getItem('user') ?
                   
                        <>
                            <Link to='/findOpponent/Go' style={{ marginRight: '10px' }}>Go</Link>
                            <Link to='/findOpponent/Backgommon' style={{ marginRight: '10px' }}>Backgommon</Link>
                            <a className="link" onClick={() => { localStorage.removeItem('user'); props.history.push('/') }}>خروج</a>
                        </>
                        :
                        <Link to='/login' style={{ marginRight: '10px' }}>ورود</Link>
            }
            </div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/game/go/:isFirst" component={Go} />
                <Route path="/findOpponent/:id" component={FindOpponent} />
                <Route path="/game/backgommon/:isFirst" component={Backgommon} />
            </Switch>

        </>
    );


}

export default withRouter(App);


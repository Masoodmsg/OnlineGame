

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from "react-router-dom";

import App from './components/App';
import SocketEvents from './SocketEvents';
import config from './../../config';
//import './../assets/games/Backgommon/js/backgommon'

window.socket = new SocketEvents('http://' + config.host + ':' + config.port.toString()).init();
let user = localStorage.getItem('user');
if (user) {
    user = JSON.parse(user);
    user.status = 'login';
    user.time = Date.now();
}
else
    user = { status: 'guest', time: Date.now() };

socket.on('connect', function (socket) {
    window.socket.emit('login', window.socket.id, user);
    alert('1111111111111111111')
});

ReactDOM.render(
    
        <Router>
            <App />
        </Router>
    ,
    document.getElementById('root'));



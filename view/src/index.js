

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from "react-router-dom";

import App from './components/App';
import SocketEvents from './SocketEvents'
import config from './../../config'


window.socket = new SocketEvents('http://' + config.host + ':' + config.port.toString()).init();

ReactDOM.render(
    
        <Router>
            <App />
        </Router>
    ,
    document.getElementById('root'));



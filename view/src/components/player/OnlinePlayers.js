import React, { Component } from "react";
import ReactDOM from 'react-dom';



class OnlinePlayers extends Component {


    constructor(props) {


        super(props)
        this.wgo = React.createRef();
        this.color = 'black';
        this.board
        this.player
        this.game
        this.isPlay = true
        window.socket.on('join', this.join.bind(this));
        window.socket.on('left', this.left.bind(this));
    }

    componentDidMount() {


    }

    join() {

    }

    left() {

    }

    render() {

        return (<div> </div>)
    }
}

export default OnlinePlayers
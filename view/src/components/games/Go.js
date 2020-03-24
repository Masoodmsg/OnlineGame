import React, { Component } from "react";
import ReactDOM from 'react-dom';



class Go extends Component {

    constructor(props) {


        super(props)
        this.wgo = React.createRef();
    }

    componentDidMount() {

        var sheet = document.createElement('link');
        sheet.rel = 'stylesheet';
        sheet.href = './view/assets/games/Go/wgo.player.css';
        sheet.type = 'text/css';
        document.head.appendChild(sheet);

        const script = document.createElement("script");
        script.async = true;
        script.src = "./view/assets/games/Go/wgo.js";
        document.body.appendChild(script);
        script.onload = (e) => {

            
            let board = new window.WGo.Board(this.wgo.current, {

                width: 600,
                height: 600
            })

            board.addEventListener("click", play);
        };


        
       
       

       

    }

    play(x, y) {

        if (tool.value == "black") {
            board.addObject({
                x: x,
                y: y,
                c: WGo.B
            });
        }
        else if (tool.value == "white") {
            board.addObject({
                x: x,
                y: y,
                c: WGo.W
            });
        }
        else if (tool.value == "remove") {
            board.removeObjectsAt(x, y);
        }
        else {
            board.addObject({
                x: x,
                y: y,
                type: tool.value
            });
        }
    }
    render() {

        return <div ref={this.wgo}></div>
    }
}

export default Go


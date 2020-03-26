import React, { Component } from "react";
import ReactDOM from 'react-dom';



class Go extends Component {

    constructor(props) {


        super(props)
        this.wgo = React.createRef();
        this.color = 'black';
        this.board
        this.player

        window.socket.on('play', this.playOpponent.bind(this));
    }

    componentDidMount() {

        var sheet = document.createElement('link');
        sheet.rel = 'stylesheet';
        sheet.href = './view/assets/games/Go/wgo.player.css';
        sheet.type = 'text/css';
        document.head.appendChild(sheet);

        let script = document.createElement("script");
        script.async = true;
        script.src = "./view/assets/games/Go/wgo.js";
        document.body.appendChild(script);
        script.onload = (e) => {

            script = document.createElement("script");
            script.async = true;
            script.src = "./view/assets/games/Go/wgo.player.js";
            document.body.appendChild(script);
            script.onload = (e) => {


                this.player = new WGo.BasicPlayer(this.wgo.current, {
                    sgf: "game.sgf",
                    kifuLoaded: function(e) {
                        //elem2.innerHTML += '> Loaded kifu: ' + e.kifu.info.black.name + ' vs. ' + e.kifu.info.white.name + '\n';
                        console.log(e)
                    },
                    update: (e) => {

                        if (e.op !== 'init' && e.node.move) {
                            //e.target.setFrozen(true)
                            //console.log(e, e.target.board.getState())
                            window.socket.emit('play', window.socket.id,e.node.move, e.target.board.getState())
                        }
                      
                    },
                    frozen: function(e) {
                        console.log(e)
                    },
                    unfrozen: function(e) {
                        console.log(e)
                    }
                });

                this.player.board.setSize(9)
                this.player.board.setWidth(600)

            };
          
           
        };


        

    }

    playOpponent(position, states) {

        this.player.board.restoreState(states)
        this.player.kifuReader.game.turn = position.c == 1 ? -1 : 1;
        this.player.setFrozen(false)
    }


    render() {

        return <div ref={this.wgo}></div>
       
    }
}

export default Go


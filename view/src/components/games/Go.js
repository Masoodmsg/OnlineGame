import React, { Component } from "react";
import ReactDOM from 'react-dom';
import OnlinePlayers from './../player/OnlinePlayers'


class Go extends Component {

    constructor(props) {


        super(props)
        this.wgo = React.createRef();
        this.color = 'black';
        this.board
        this.player
        this.game
        this.isPlay = true
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
                    kifuLoaded: function (e) {
                        //elem2.innerHTML += '> Loaded kifu: ' + e.kifu.info.black.name + ' vs. ' + e.kifu.info.white.name + '\n';
                        console.log(e);
                    },
                    update: (e) => {

                        if (e.op !== 'init' && e.node.move && this.isPlay) {
                            e.target.setFrozen(true);
                            this.isPlay = true;
                            //console.log(e, e.target.board.getState())
                            window.socket.emit('play', window.socket.id, e.node.move);
                        }

                    },
                    frozen: function (e) {
                        console.log(e);
                    },
                    unfrozen: function (e) {
                        console.log(e);
                    }
                });

                this.game = new WGo.Player.Editable(this.player, this.player.board);
                this.game.set(true);
                this.player.board.setSize(9);
                this.player.board.setWidth(600);
                
                this.player.setFrozen(this.props.match.params.isFirst === 'true' ? true : false)

            };


        };




    }

    playOpponent(position) {

        //this.player.board.addObject(position)
        //this.player.board.restoreState(states)
        this.isPlay = false;
        this.player.setFrozen(false);
        this.game.play(position.x, position.y);
        this.isPlay = true;
        this.player.kifuReader.game.turn = position.c === 1 ? -1 : 1;


    }


    render() {

        return (
            <table style={{ width: '100%', height: '100%'}}>
                <tr>
                  
                    <td style={{ width: '80%' }}>
                        <div ref={this.wgo} />
                    </td >
                    <td style={{ width: '20%' }}>
                        <OnlinePlayers />
                    </td >
                </tr>
            </table >
        )

    }
}

export default Go


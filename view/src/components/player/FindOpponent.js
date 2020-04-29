import React, { Component } from 'react';




class FindOpponent extends Component {


    constructor(props) {


        super(props);
        this.state = { users: [] };
        window.socket.on('findOpponent', this.findOpponent.bind(this));
        window.socket.emit('findOpponent', window.socket.id, props.match.params.id)
    }

    findOpponent(isFirst) {
        alert(isFirst)
        this.props.history.push('/game/' + this.props.match.params.id.toLowerCase() + '/' + isFirst)

    }

    componentWillUnmount() {

        window.socket.removeEventListener('findOpponent');
        alert('حریف پیدا شد')
        //window.socket.emit('leaveGame', window.socket.id, this.props.match.params.id)
    }

    render() {
        return (

            <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: '999999999', textAlign: 'center', paddingTop:'20%',right:'0',top:'0' }}>
                <span>
                    درحال پیدا کردن حریف...
                </span>
            </div>
        )
    }
}


export default FindOpponent;

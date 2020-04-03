import React, { Component } from "react";
import ReactDOM from 'react-dom';



class OnlinePlayers extends Component {


    constructor(props) {


        super(props);
        this.state = { users: [] };
        window.socket.on('join', this.join.bind(this));
        window.socket.on('leave', this.leave.bind(this));
    }

    componentDidMount() {


    }

    join(users) {



        this.setState((state) => {
            state.users = users;
            return state;
        });

    }

    leave() {

        this.setState((state) => {
            state.users = users;
            return state;
        });
    }

    render() {

        let users = this.state.users;
        if (users) {
            return (
                <select id="onlineUser" multiple style={{ width: '100%', height: '100%' }}>

                    {
                        users.map((user, i) => {
                            return <option key={i} value={user.username}>{user.name + ' ' + user.family}</option>;
                        })
                    }
                </select>

            );
        }
        return null
    }
}

export default OnlinePlayers;
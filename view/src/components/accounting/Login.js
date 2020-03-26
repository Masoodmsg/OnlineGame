import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';


function Login(props) {

    let username = React.createRef();
    let password = React.createRef();
    function login() {


        //const node = ReactDOM.findDOMNode(self);
       
        let query = {

            query: `
                
                query Login($username: String!, $password: String!) {

                    login(username: $username, password: $password){
                        name
                        username
                        opponent
                    }
                }
            `,
            variables: {
                "username": username.current.value,
                "password": password.current.value
            }
        };

        fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(query)
        }).then(res => res.json()).then((res) => {
            console.log(res.data)
            window.socket.emit('login', window.socket.id, res.data.login) 

            props.history.push('./game/go')
        });
    }

    return (
        <div >


            <p >
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" ref={username}/>
            </p>
            <p >
                <label htmlFor="password">password</label>
                <span className="password-input">
                    <input type="password" name="password" id="password" autoComplete="current-password" ref={password}/>

                </span>
            </p>


            <p className="form-row">


                <button type="button" name="login" value="æÑæÏ" onClick={login.bind(this)}>Enter</button>
			</p>
                             

			
		</div>
            );
        
        
        }
        
export default Login
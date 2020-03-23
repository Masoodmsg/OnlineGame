import React, { useState, useEffect } from "react";



function Login(props) {


    function login() {

        let query = {

            query: `
                
                query Login {
                    login(username: "masood", password: "123456"){
                        name
                        username
                    }
                }
            `
        };

        fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(query)
        }).then(res => res.json()).then((res) => {
            console.log(res.data)
            window.socket.emit('login',res.data.login) 
        });
    }

    return (
        <div >


            <p >
                <label htmlFor="username">username</label>
                <input type="text"  name="username" id="username" autoComplete="username" value="" />
            </p>
            <p >
                <label htmlFor="password">password</label>
                <span className="password-input">
                    <input type="password" name="password" id="password" autoComplete="current-password" />

                </span>
            </p>


            <p className="form-row">


                <button type="button" name="login" value="æÑæÏ" onClick={() => login()}>Enter</button>
			</p>
                             

			
		</div>
            );
        
        
        }
        
export default Login
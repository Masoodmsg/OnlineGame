import React, { useState, useEffect } from "react";



function Login(props) {


    function login() {

        let query = {

            query: `
                
                query Login {
                    login(username: "masood", password: "123456"){
                        name
                    }
                }
            `
        };

        fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(query)
        });
    }

    return (
        <div >


            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="username">username</label>
                <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="" />
            </p>
            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="password">password</label>
                <span className="password-input">
                    <input className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password" />

                </span>
            </p>


            <p className="form-row">


                <button type="button" name="login" value="æÑæÏ" onClick={() => login()}>Enter</button>
			</p>
                             

			
		</div>
            );
        
        
        }
        
export default Login
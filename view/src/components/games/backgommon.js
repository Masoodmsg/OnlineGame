import React, { Component } from "react";
import ReactDOM from 'react-dom';



class Backgommon extends Component {

    constructor(props) {
        super(props);
        
    }
    componentDidMount() {

        import('./../../../assets/games/Backgommon/js/backgommon').then((E) => {

            var oMain = new E.default.CMain({

                fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                check_orientation: true,     //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES   
            });

            if (isIOS()) {
                setTimeout(function () { sizeHandler(); }, 200);
            } else {
                sizeHandler();
            } 
        })
       
    }

    componentWillUnmount() {

       
        alert('حریف پیدا شد')
        
    }

    render() {
        return (


            <canvas id="canvas" className='ani_hack' width="1360" height="840"> </canvas>
        )
    }
}


export default Backgommon;
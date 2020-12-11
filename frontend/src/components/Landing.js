import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Footer from './Footer.js';
import Header from './Header.js';

export default class Landing extends Component {
    render() {
        return (
            <div>
            <Header> </Header>
                <main>
                <div className="container">
                    <center>
                    <video autoPlay loop playsInLine>
                    <source src="./TouchBASE.mp4" type="video/mp4" />
                    </video>
                    {/* <img src="./Touch BASEblue.gif" alt="touch base logo"/> */}

                    <p> </p>
                    
                    </center>
                </div>
                </main>
                <Footer> </Footer>
            </div>
        )
    }
}

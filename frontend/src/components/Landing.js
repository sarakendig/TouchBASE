import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Footer from './Footer.js';
import Header from './Header.js';

const Landing = () => {

   const [username, setUsername] = useState('');
   const [room, setRoom] = useState('');
    
        return (
            <div>
            <header><Header/></header>
            
                <main>
                <div className="container">

                    <div className="row">

                        <div id="left" className="col s6">

                            <center>

                            {/* <video className="logo" autoPlay loop playsInLine>
                            <source src="./TouchBASE.mp4" type="video/mp4" />
                            </video> */}

                            <img src="./Touch BASEblue.gif" alt="touch base logo" className="logo" />

                            <p id="about"> Video chat and message your friends in your own private room in real time.</p>
                            </center>

                            </div>

                        <div id="right" className="col s6 valign-wrapper"> 
                        <center>

                        <h1 id="loginh1">LOG IN</h1>

                        <p>Choose a username and room name. </p>

                            <div className="input-field">
                           

                            <input 
                            placeholder="username" 
                            id="joinroom" 
                            className="white-text" 
                            type="text" 
                            onChange={(event) => setUsername(event.target.value)} /> 


                            {/* <div className="joininput"> */}
                            <input 
                            placeholder="roomname" 
                            id="joinroom" 
                            className="white-text" 
                            type="text" 
                            onChange={(event) => setRoom(event.target.value)} /> 
                            </div>


                            <Link 
                            onClick={e => (!username || !room) ? e.preventDefault() : null} to={`/room?username=${username}&room=${room}`}>

                            <button 
                            className="waves-effect waves-light btn-large black white-text" 
                            id="roombutton" 
                            type="submit"> 
                            Start Chat
                            </button>
                            </Link>

                            </center>
                            
                        </div>
                    
                    
                    </div>

                </div>

                </main>
               {/* <footer> <Footer/> </footer> */}
            </div>
        )
    }

export default Landing;
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";


const baseURL = 'http://localhost:3004/';
let socket =io(baseURL);

const Room = ( {location} )  => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    

    useEffect(() => {
        const { room, username } = queryString.parse(location.search);


        setUsername(username);
        setRoom(room);

        console.log(socket)

        socket.emit('login', {username, room}, () => {

        });
      

}, [location.search]);

    useEffect (() => {
      
            
            })




        return (
            <div>
            
              <main>
                <div className="room">
                                  

                        <div id="video-grid">
                            <h1 className="white-text flow-text">video</h1>
                        </div>

                        <div id="nav">

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light light"><i class="material-icons">headset_mic</i></button>

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">volume_off</i></button>

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light light"><i class="material-icons">videocam</i></button>

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">videocam_off</i></button>

                            

                        </div>

                </div>
                </main>
                                  
                   
                        <div id="chat-box">


                                   
                        
                            <div id="chats">
                            <ul className="message-box">
                            
                           </ul>
                            </div>


                              

                            <div id="sendmsg">
                            <form id="msgform" action="">
                                <textarea 
                                    className="white-text" 
                                    autocomplete="off" 
                                    id="message-input" 
                                    type="text" 
                                    name="message-input"  
                                    placeholder="Type to chat. Remember, be nice!" cols="10" rows="5"   
                                    />
                                
                                <input
                                    id="msgsubmit"
                                    className="btn grey darken-4 waves-effect waves-grey"
                                    type="submit"
                                    value="send"
                                    />
                            </form>
                        </div>
                    </div>
           </div>
         
                
            
        )

}

export default Room;
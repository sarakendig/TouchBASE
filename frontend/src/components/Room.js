import React, { Component } from 'react'

export default class Room extends Component {
    render() {
        return (
            <div>
              <main>
                <div className="room">
                                  

                        <div id="video-grid">
                            <h1 className="white-text flow-text">video here</h1>
                        </div>

                        <div id="buttons">

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light light"><i class="material-icons">headset_mic</i></button>

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">volume_off</i></button>

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light light"><i class="material-icons">videocam</i></button>

                            <button id="videobtn" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">videocam_off</i></button>

                        </div>

                </div>
                </main>
                                  
                   
                        <div id="chat-box">

                                   
                        
                            <div id="chats">
                            <ul id="message-box" className="flow-text">
                            </ul>
                            </div>


                              

                            <div id="sendmsg">
                            <form>
                                <textarea className="white-text" autocomplete="off" id="message-input" type="text" name="message-input" />
                                
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

}
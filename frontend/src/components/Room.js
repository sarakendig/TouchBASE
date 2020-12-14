import React, { Component } from "react";
import io from "socket.io-client";


const ENDPOINT = 'http://localhost:5000/';
let socket =io(ENDPOINT);

export default class Room extends Component {
constructor() {
    super();
    this.state = { 
        msg: "",
        chats: []
    };
}

    componentDidMount() {
        socket.on('chat', ({id, msg}) => {
            this.setState({
                chat: [...this.state.chat, {id, msg}]
            })
        })
    }

    onMsgAppend = e => {
        this.setState({ 
            chats: this.state.chat.concat(chat),
            msg: e.target.value });
    };

    onMsgSend = () => {
        socket.emit('chat', this.state.msg);
        this.setState({msg: ""})
    }

    displayChat() {
        const {chat} = this.state;
        return chat.map(({id, msg}, idx) => (
            <div key={idx}>
                <span>{id}:</span>
                <span> {msg}</span>
                
            </div>
        ));
    }

render() {
        return (
            <div>
            
              <main>
                <div className="room">
                                  

                        <div id="video-grid">
                            <h1 className="white-text flow-text">video</h1>
                        </div>

                        <div id="nav">

                            <button id="videobtn" className="btn-floating btn-large waves-effect waves-light light"><i class="material-icons">headset_mic</i></button>

                            <button id="videobtn" className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">volume_off</i></button>

                            <button id="videobtn" className="btn-floating btn-large waves-effect waves-light light"><i className="material-icons">videocam</i></button>

                            <button id="videobtn" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">videocam_off</i></button>

                            

                        </div>

                </div>
                </main>
                                  
                   
                        <div id="chat-box">


                                   
                        
                            <div id="chats">
                            <div id="message-box">
                            {this.displayChat()}
                            </div>
                            
                            </div>


                              

                            <div id="sendmsg">
                            <form id="msgform" action="">
                                <textarea 
                                    className="white-text" 
                                    autoComplete="off" 
                                    id="message-input" 
                                    type="text" 
                                    name="msg"  
                                    placeholder="Type to chat. Remember, be nice!" cols="10" rows="5" 
                                    onChange={e => this.onMsgAppend(e)} 
                                    value={this.state.msg}  
                                    />
                                
                                <input
                                    id="msgsubmit"
                                    className="btn grey darken-4 waves-effect waves-grey"
                                    type="submit"
                                    value="send"
                                    onClick={this.onMsgSend}
                                    />
                            </form>
                        </div>
                    </div>
           </div>
         
                
            
        )

}
}

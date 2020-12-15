import React, { Component } from "react";
import io from "socket.io-client";


const ENDPOINT = 'http://localhost:5000/';
let socket =io(ENDPOINT);

// const videoGrid = document.getElementById('video-grid')
// const peer = new Peer

// let videoStream;

// const video = document.createElement('video');
// const peers = {}

// navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true
// })
// .then(stream => {
//     videoStream = stream;
//     video.srcObject = stream;
//     video.onloadedmetadata = (e) => {
//         video.play();
//     };
//     videoGrid.append(video)
// })
// peer.on('call', call =>{
//     call.answer(stream)
//     call.on('stream', userVideoStream => {
//         addVideoStream(video, userVideoStream)
// })
// .catch(error => {
//     alert('Please enable camera permissions')

// })

// function addUserVideo(video, stream) {
//     video.srcObject = stream
//     video.addEventListener('loadedmetadata', () => {
//       video.play()
//     })
//     videoGrid.append(video)
//   }
  

export default class Room extends Component {
 constructor() {
    super();
    this.state = { 
        msg: "",
        chat: [],
       
    };
    this.handleChange = this.handleChange.bind(this);
};

  

    componentDidMount() {
        socket.on('chat', (msg, id) => {
        
            this.setState({
                chat: [...this.state.chat, {id, msg}]
            })
        })
    };


    onMsgAppend = (val, e) => {
        const {chat} = this.state;
        if(this.state.chat){
        this.setState({chat: this.state.chat.concat([chat])});
        }
    };

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value})
    };

    onMsgSend = (e) => {
        e.preventDefault();
        socket.emit('chat', this.state.msg);
        this.setState({msg: ""})
    };

    displayChat() {
        const {chat} = this.state;
        return chat.map(({id, msg}, idx) => (
            <div key={idx}>
                <span>{id}</span>
                <span> {msg}</span>
                
            </div>
        ));
    };

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
                                    id="msg" 
                                    type="text" 
                                    name="msg"  
                                    placeholder="Type to chat. Remember, be nice!" cols="10" rows="5" 
                                    onChange= {this.handleChange} 
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

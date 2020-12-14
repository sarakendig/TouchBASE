const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 3004;

const app = express();
const server = http.createServer(app);
const io = socketio(server);


const router = require('./router')

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
    console.log('We are connected!!!')

    socket.on('login', ({ username, room}, callback) => {
        console.log(username, room);
    })

    socket.on('chat', (data) => {
        console.log('message sent')
        socket.broadcast.emit('msg', {
            username: socket.username,
            msg: msg
        })
    })

    socket.on('typing', () => {
        console.log('typing...')
        socket.broadcast.emit('typing', {
            username: socket.username
        })
    })

    socket.on('logout', () => {
        console.log('User logged out')
    })
})



server.listen(PORT, () => console.log(`Listening on port ${PORT}`));




const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const io = socketio(server);
const PORT = process.env.PORT || 3004;

const server = http.createServer(app);


const router = require('./router')


app.use(router);

io.on('connection', (socket) => {
    console.log('We are connected!!!')

    socket.on('new msg', (data) => {
        console.log('message sent')
        socket.broadcast.emit('new msg', {
            username: socket.username,
            msg: data
        })
    })

    socket.on('typing', () => {
        console.log('typing...')
        socket.broadcast.emit('typing', {
            username: socket.username
        })
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})



server.listen(PORT, () => console.log(`Listening on port ${PORT}`));




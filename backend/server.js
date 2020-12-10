const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const io = socketio(server);
const PORT = process.env.PORT || 3004;

const server = http.createServer(app);


io.on('connection', (socket) => {
    socket.on('new msg', (data) => {
        socket.broadcast.emit('new msg', {
            username: socket.username,
            msg: data
        })
    })

    socket.on('typing', () => {
        socket.broadcast.emit('typing', {
            username: socket.username
        })
    })
})



server.listen(PORT, () => console.log(`Listening on port ${PORT}`));




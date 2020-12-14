const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
      },
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
  });


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('server is live');
});



io.on('connection', (socket) => {
    // console.log(socket)
    const { id } = socket.client;
    console.log(`User connected: ${id}`);


    socket.on('login', ({ id, room}, callback) => {
        console.log(id, room);
    })

    socket.on('chat', (msg, id) => {
        console.log('message sent: ' + msg)
        io.emit('chat', msg)
        console.log('chat')
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




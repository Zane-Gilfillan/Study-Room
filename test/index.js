//commenting out the test server/app build because it has merged into our main project in server.js

//keeping all of the code around just to be safe

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {

//         console.log('a user connected');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//     });


//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });
// });

// server.listen(3002, () => {
//   console.log('listening on *:3002');
// });
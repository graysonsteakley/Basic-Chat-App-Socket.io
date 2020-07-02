const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { Console } = require('console');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{
   console.log('We have a new connection');
});

app.use(router);
server.listen(PORT, ()=> console.log(`server has started on port ${PORT}`));

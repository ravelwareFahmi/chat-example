var app = require('express')();
var http = require('http').createServer(app); //create server
var io = require('socket.io')(http) //runing port by passing http (4000)


// endpoint to get index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')
});

// make connection
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', ()=>{
    console.log('user disconnect')
  });

  //event chat message
  socket.on('chat-message', (msg)=>{
    console.log('message :' + msg);
    // send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:
    io.emit('chat-message', msg)
  });
  
});

// running port 
http.listen(3000, () =>{
  console.log('listening on *:3000');
});
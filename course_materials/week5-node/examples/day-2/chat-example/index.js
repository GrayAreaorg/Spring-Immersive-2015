var app = require('express')();
var http = require('http').Server(app);

// setup server side socket.io
var io = require('socket.io')(http);

// setup index route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listen on port 3001
http.listen(3001, function(){
  console.log('listening on *:3001');
});

// log to server anytime a client connects
io.on('connection', function(socket){
  console.log('a user connected');
    
  // also log when a user disconnects
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
    
  // callback for when message is received
  socket.on('chat message', function(msg){
    // print to the console any messages this socket sends
    console.log('message: ' + msg);
      
    // send message to every connected socket
    io.emit('chat message', msg);
  });
});
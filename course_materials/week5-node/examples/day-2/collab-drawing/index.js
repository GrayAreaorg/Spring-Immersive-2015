var express = require('express')
var app = express();
var http = require('http').Server(app);

// setup server side socket.io
var io = require('socket.io')(http);

// middelware
app.use(express.static('public'));

// setup index route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listen on port 3001
http.listen(3001, function(){
  console.log('listening on 3001');
});

// log to server anytime a client connects
io.on('connection', function(socket){
  console.log('a user connected');

  // also log when a user disconnects
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
    
  socket.on('mouse',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'mouse' " + data.x + " " + data.y);      
        // Send it to all other clients
        socket.broadcast.emit('mouse', data);
      }
    );
});

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
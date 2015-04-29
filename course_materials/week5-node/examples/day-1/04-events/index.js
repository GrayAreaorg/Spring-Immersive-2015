var EventEmitter = require('events').EventEmitter

var emitter = new EventEmitter

// Whenever we recieve a `data` event,
// log its value out to the console.
emitter.on('data', function(data) {
  console.log('got data: ' + data)
})

// Emits a random `data` event every 1000ms
setInterval(function() {
  emitter.emit('data', Math.random())
}, 1000)

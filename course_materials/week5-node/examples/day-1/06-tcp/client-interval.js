// Require in the `net` module from node core:
// http://nodejs.org/api/net.html
var net = require('net')

// Creates a TCP client socket. Provided your server
// is running, this creates a "duplex" stream which you
// can both read data from and write data to.
var client = net.connect({
  host: 'localhost',
  port: 9999
})

// Ping the server every 1000ms with the message "ping!"
// If you run server.js and then this script, your
// server should start logging "ping!" to the terminal.
setInterval(function() {
  client.write('ping!\n')
}, 1000)

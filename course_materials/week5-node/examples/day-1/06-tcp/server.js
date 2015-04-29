// Require in the `net` module from node core:
// http://nodejs.org/api/net.html
var net = require('net')

// Creates a TCP server. Whenever a new connection with a client
// is established, the `newConnection` function is called.
var server = net.createServer(function newConnection(connection) {
  console.log('connection established')

  // You can write output directly to the connection like so.
  // In this case, this output will get logged to your client's console.
  connection.write('hello\n')
  connection.write('world\n')

  // The connection object is a stream, meaning you can
  // pipe to and from it too!
  connection.pipe(process.stdout)
})

// Starts the server listening to port 9999. This makes
// the server accessible for your clients, provided it
// knows the address.
server.listen(9999, function(err) {
  if (err) throw err

  // Once the server's started listening, you can
  // run this command to test the output it sends
  // on making a new connection.
  console.log('$ telnet localhost 9999')
})

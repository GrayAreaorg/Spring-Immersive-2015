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

// * Reads from the process' stdin, and sends that data to the client.
// * Reads from the client's incoming data, and sends that data to stdout.
//
// This means you can pipe output to and from your shell like so:
//
// echo hello | node client.js > output-file.txt
//
process.stdin
  .pipe(client)
  .pipe(process.stdout)

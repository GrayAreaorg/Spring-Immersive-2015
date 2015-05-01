// Load express from node_modules
var express = require('express')

// Creates an express server
var app = express()

// A simple middleware function that responds
// to the browser with "hello world!".
app.use(function(req, res) {
  res.end('hello world!')
})

// Listens to port 8080, making the express server
// accessible on http://localhost:8080/ from your browser
// once it's ready.
app.listen(8080, function(err) {
  if (err) throw err
  console.log('http://localhost:8080/')
})

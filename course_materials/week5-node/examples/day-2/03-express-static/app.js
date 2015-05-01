// Load express from node_modules
var serveStatic = require('serve-static')
var express = require('express')

// Creates an express server
var app = express()

// Starts up a static server for the "files" directory.
// This works a lot like XAMPP/MAMP/LAMP serves up files,
// except you're not able to generate the output like you could
// with PHP.
// middelware
app.use(express.static('files'));

// Listens to port 8080, making the express server
// accessible on http://localhost:8080/ from your browser
// once it's ready.
app.listen(8080, function(err) {
  if (err) throw err
  console.log('http://localhost:8080/')
})

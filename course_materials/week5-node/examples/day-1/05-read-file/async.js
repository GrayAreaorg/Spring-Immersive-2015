var fs = require('fs')

// Retrieve the contents of this file as a string.
// Note that we're passing 'utf8' here as the second
// argument: this ensures that we get a string instead
// of a Buffer, which we'll be covering later.
fs.readFile(__filename, 'utf8', function(err, contents) {

  // Log the contents of this file out to the terminal.
  console.log(contents)
})

// Because we're reading the file asynchronously, this
// output is actually triggered *before* we've read the
// file and logged it to the terminal.
console.log('hi there!')

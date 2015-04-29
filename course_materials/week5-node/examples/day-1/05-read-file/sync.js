var fs = require('fs')

// Retrieve the contents of this file as a string.
// Note that we're passing 'utf8' here as the second
// argument: this ensures that we get a string instead
// of a Buffer, which we'll be covering later.
//
// Generally, reading a file synchronously is a Bad Thing,
// but in some cases it's OK. For example, when starting
// up an application it's much simpler to load any initial
// files synchronously, and once the server's running make
// any future calls async.
var contents = fs.readFileSync(__filename, 'utf8')

// Log the contents of this file out to the terminal.
console.log(contents)

// Because we're reading the file synchronously, this
// won't run until we've read and logged this file.
console.log('hi there!')

var fs = require('fs')

// Streams this file's content out to the terminal.
// It takes a while to get used to streaming, but it's
// often the simplest way of passing and transforming
// data like this.
fs.createReadStream(__filename)
  .pipe(process.stdout)

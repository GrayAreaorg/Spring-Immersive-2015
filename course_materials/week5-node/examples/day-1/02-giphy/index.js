//
// Creates a Giphy API client, using http://npmjs.com/package/giphy
//
// Note that you'll need to have giphy installed before this runs
// properly! Simply run this from your terminal in this directory:
//
//    npm install giphy
//
var token = 'dc6zaTOxFJmzC'
var giphy = require('giphy')(token)

// Sets off the translate API. Currently this won't run – you'll need
// to specify a search parameter, and then log the resulting URL out
// to the terminal.
giphy.translate({ s: 'cat' }, function(err, data) {
  if (err) throw err
  console.log(data.data.url)
})

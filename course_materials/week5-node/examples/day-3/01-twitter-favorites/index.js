var Twitter = require('twitter')

// Authenticates with Twitter using the (unofficial) twitter
// package on npm. This is required for using the interesting parts
// of the API, e.g. streaming or posting tweets.
var client = new Twitter({
  consumer_key: '7NGkwzcl1MBWVEnB3D3vdp3Fb',
  consumer_secret: '1tIO3OvezKsUNWwrIcMYQIYz24TR6AC9lGiwlakJYmOt8eSF5X',
  access_token_key: '3034146673-LaHhTZwC0joyP4skklP3fHuUU5IyYkNZmNUsvRW',
  access_token_secret: '3983ita65lGdjtSG8Ro3X1obFotZj3XXkBwosv54PanET'
})

// Retrieves the current account's most recent favourite
// tweets from the Twitter API. The data returned is an array
// of tweet objects.
client.get('favorites/list', function(err, tweets) {
  if (err) throw new Error(err[0].message)

  // Logs the unfiltered tweet data to your terminal.
  console.log(tweets)
})

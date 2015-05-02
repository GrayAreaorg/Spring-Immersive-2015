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

// Creates a realtime streaming connection to the Twitter
// API, letting you "track" a particular keyword or hashtag
// and recieve a notification instantly as soon as a tweet is posted.
//
// Documentation, including additional parameters you can use, may
// be found here:
// https://dev.twitter.com/streaming/reference/post/statuses/filter
//
// Note that you can also stream tweets from particular users, or
// tweets posted from around a particular location
client.stream('statuses/filter', {
  // laughing crying emoji: the most popular emoji
  track: '\uD83D\uDE02'
}, function(tweetStream) {

  // `tweetStream` will emit a "data" event whenever
  // a new tweet is posted. These will be in the same format
  // as seen in the first example.
  tweetStream.on('data', function(tweet) {
    console.log(tweet.text)
  })
})

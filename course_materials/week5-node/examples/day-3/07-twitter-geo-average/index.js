var cma = require('cumulative-moving-average')
var Twitter = require('twitter')

// Authenticates with Twitter using the (unofficial) twitter
// package on npm. This is required for using the interesting parts
// of the API, e.g. streaming or posting tweets.
var client = new Twitter({
  consumer_key: 'o3GKBxY2brOVaoRfouS0uSkOR',
  consumer_secret: 'ilqz7nKsUl1795x4mWSW2RLAXoGXKraFEBxi1meA6CLQCRCt2T',
  access_token_key: '3034146673-ZIWWFpSPFMNDS8agAXNHsUhDcKChAO4yTsnW2tB',
  access_token_secret: 'ZyVdcq4tnWR7fDAPalj1vSufQhIaasLWa3xM5RP74LHcQ'
})

// Store a rolling average of each latitude
// and longitude value, so that we can calculate
// the average position without needing to keep
// them all in memory. This is using the "cumulative-moving-average"
// package on npm.
var latAverage = cma()
var lonAverage = cma()

client.stream('statuses/filter', {
  track: '😂'
}, function(tweetStream) {

  // `tweetStream` will emit a "data" event whenever
  // a new tweet is posted. These will be in the same format
  // as seen in the first example.
  tweetStream.on('data', function(tweet) {
    // If there's no geo data available, let's just exit
    // the function early using "return" and ignore this
    // tweet.
    if (!tweet.geo) return

    // Update the rolling average values
    var lat = tweet.geo.coordinates[0]
    var lon = tweet.geo.coordinates[1]

    latAverage.push(lat)
    lonAverage.push(lon)

    console.log('Harvested tweets: ' + latAverage.length)
  })

  setInterval(function() {
    // If we haven't got any locations to sample
    // yet, then just exit the function – setInterval
    // will try again in 15 seconds.
    if (!latAverage.length) return
    if (!lonAverage.length) return

    // Twitter's "geo/reverse_geocode" API endpoint takes
    // a latitude/longitude pair, and retrieves the name
    // of the location. This could be a city, region,
    // country or all of the above.
    client.get('geo/reverse_geocode', {
      lat: String(latAverage.value),
      long: String(lonAverage.value)
    }, function(err, location, request) {
      // Ignore errors - if Twitter can't find a place for
      // you, it'll behave as if the page isn't found.
      if (err) return

      // Log the location data available
      console.log(location.result.places[0].full_name)
    })
  }, 15 * 1000)
})

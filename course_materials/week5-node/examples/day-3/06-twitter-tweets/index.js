// This example retrieves all of the tweets in an
// account's timeline and logs them to the terminal.
// You could use this, for example, to pre-seed a
// markov chain bot imitating a user. Sample two users
// and you could make a hybrid like "The Doom That Came to Puppet":
// http://thedoomthatcametopuppet.tumblr.com/

var Twitter = require('twitter')
var async = require('async')
var fs = require('fs')

// Authenticates with Twitter using the (unofficial) twitter
// package on npm. This is required for using the interesting parts
// of the API, e.g. streaming or posting tweets.
var client = new Twitter({
  consumer_key: 'o3GKBxY2brOVaoRfouS0uSkOR',
  consumer_secret: 'ilqz7nKsUl1795x4mWSW2RLAXoGXKraFEBxi1meA6CLQCRCt2T',
  access_token_key: '3034146673-ZIWWFpSPFMNDS8agAXNHsUhDcKChAO4yTsnW2tB',
  access_token_secret: 'ZyVdcq4tnWR7fDAPalj1vSufQhIaasLWa3xM5RP74LHcQ'
})

// Hold onto all of the tweets in an array,
// in case we want to use them later
var allTweets = []

// We have to "paginate" our data requests, as the Twitter API
// will only retrieve a limited number of tweets per request.
// So we keep track of the least recent tweet's ID on each request
// such that we can pass it in next time.
var lastId = null

// This function comes from the "async" library on npm:
// http://npmjs.com/package/async
//
// Here, we're calling the second function until the first
// function returns false. "lastId === null" is used here
// to ensure that the function returns true when we first
// start the loop.
async.whilst(function() {
  return lastId || lastId === null
}, function(next) {
  var options = {
    screen_name: 'artassignbot'
  }

  // Set "max_id" in the request parameters
  // if we have a previous tweet ID available.
  if (lastId) options.max_id = lastId

  client.get('statuses/user_timeline', options, function(err, tweets) {
    if (err) throw new Error(err[0].message)

    // Retrieve the least recent tweet's ID number.
    lastId = tweets[tweets.length - 1]
    lastId = lastId && lastId.id

    // Combines the current array of tweets with
    // our list of all previous tweets.
    allTweets = allTweets.concat(tweets)

    // Log only the text for each tweet.
    tweets.forEach(function(tweet) {
      console.log(tweet.text)
    })

    setTimeout(next, 5000)
  })
}, function() {
  console.log('Done!')
  console.log('Found ' + allTweets.length + ' tweets in total')
})

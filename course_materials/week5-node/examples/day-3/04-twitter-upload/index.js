var Twitter = require('twitter')
var fs = require('fs')

// Authenticates with Twitter using the (unofficial) twitter
// package on npm. This is required for using the interesting parts
// of the API, e.g. streaming or posting tweets.
var client = new Twitter({
  consumer_key: '7NGkwzcl1MBWVEnB3D3vdp3Fb',
  consumer_secret: '1tIO3OvezKsUNWwrIcMYQIYz24TR6AC9lGiwlakJYmOt8eSF5X',
  access_token_key: '3034146673-LaHhTZwC0joyP4skklP3fHuUU5IyYkNZmNUsvRW',
  access_token_secret: '3983ita65lGdjtSG8Ro3X1obFotZj3XXkBwosv54PanET'
})

// The name of the file to upload. Currently
// uses `image.gif` included in this directory.
var imagePath = __dirname + '/image.gif'

// Reads the contents of our image file, returning
// its value as a string. The "encoding" option ensures
// that the data is formatted in a way that Twitter appreciates.
var imageData = fs.readFileSync(imagePath, {
  encoding: 'base64'
})

console.log('Uploading, please wait...')

// Starts an image upload using Twitter's Media API.
client.post('media/upload', {
  media: imageData
}, function(err, media) {
  if (err) throw new Error(err[0].message)

  // In return, Twitter will give us a unique
  // "Media ID" referring to this image.
  var mediaId = media.media_id_string

  console.log('Uploaded succesfully')
  console.log('Media ID: ' + mediaId)

  // Tweets a new tweet of your choosing, where the value
  // of the "status" option is the text included in the tweet.
  //
  // In this case, we're using the media ID we got back
  // from our upload so that we can attach the image to our
  // tweet.
  client.post('statuses/update', {
    media_ids: mediaId,
    status: 'I just uploaded a GIF!'
  }, function(err) {
    if (err) throw new Error(err[0].message)

    console.log('Posted tweet, all done!')
  })
})

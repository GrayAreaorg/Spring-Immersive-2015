var chokidar = require('chokidar')
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

var imagePath = __dirname + '/sketch/circle.png'

// Upload an image when first starting the Node process.
uploadImage()

// We can then use "chokidar" from npm to watch the image
// file for changes, uploading it again whenever that happens.
chokidar.watch(imagePath).on('change', function() {
  uploadImage()
})

// We've wrapped up our previous example into a
// function so that we can post images a little
// more easily. This does exactly the same thing
// as before
function uploadImage() {
  var imageData = fs.readFileSync(imagePath, {
    encoding: 'base64'
  })

  console.log('Uploading, please wait...')

  client.post('media/upload', {
    media: imageData
  }, function(err, media) {
    if (err) throw new Error(err[0].message)

    var mediaId = media.media_id_string

    console.log('Uploaded succesfully')
    console.log('Media ID: ' + mediaId)

    client.post('statuses/update', {
      media_ids: mediaId,
      status: 'Here is a circle'
    }, function(err) {
      if (err) throw new Error(err[0].message)

      console.log('Posted tweet, all done!')
    })
  })
}

# Week 5: Node.js

## Day 1: Node 101

### Getting Started with Node

* Introduction
* [Installing Node](http://nodejs.org/download/)
* [What is Node?](https://github.com/maxogden/art-of-node#understanding-node)
* Who uses Node?
* Examples:
  * http://donottouch.org/
  * https://vimeo.com/31952864
* [NodeSchool](http://nodeschool.io/)
* Why Node?
* Why Async?
* Running Node
* [process.argv](http://nodejs.org/api/process.html#process_process_argv)
* [npm](http://npmjs.com/)
* node_modules
* [require](https://github.com/maxogden/art-of-node#how-require-works)
* [npm install giphy](https://www.npmjs.com/package/giphy)

### Assignment #1: Giphy Translate Tool

Use Giphy's "translate" API to create a script that outputs GIF based on user
input. If you have extra time to spare, try jumping ahead and making a web
server that serves these images to a browser based on the specified URL.

### Async Patterns

* [Callbacks](https://github.com/maxogden/art-of-node#callbacks)
* [EventEmitters](https://github.com/maxogden/art-of-node#events)
* [Streams](https://github.com/substack/stream-handbook)
* Servers
* Clients
* [TCP](http://nodejs.org/api/net.html)
* [TCP servers in Node](http://nodejs.org/api/net.html#net_class_net_server)
* [TCP clients in Node](http://nodejs.org/api/net.html#net_class_net_socket)
* [process.stdin](http://nodejs.org/api/process.html#process_process_stdin)

### Assignment #2: TCP Chat Server

Create a TCP chat server and client.

* You should be able to start the server using `node server.js`, and have it
  listen for incoming connections in the background.
* The client may send messages using `node client.js <server-address> <message>`.
* Try adding some functionality to the server or client: [colorized text](https://github.com/sindresorhus/chalk), [emoji
  support](https://www.npmjs.com/package/node-emoji), [ASCII art](https://www.npmjs.com/package/ascii-art), are some fun examples.
* Try making the chat client persistent: that is to say, you can start it up
  once and continue typing messages without having to restart the process.

## Day 2: Input and Output

### Sockets and Servers

* [HTTP](http://nodejs.org/api/http.html)
* [package.json](https://docs.npmjs.com/files/package.json)
* Node and [Express](http://expressjs.com/)
* **Example**: [express-hello-world](examples/day-2/01-express-hello-world/app.js)
* [Express Middleware](http://expressjs.com/resources/middleware.html)
* **Example**: [express-middleware](examples/day-2/02-express-middleware/app.js)
* **Example**: [express-static](examples/day-2/03-express-static/app.js)
* [socket.io](http://socket.io/): hello world
* **Example**: [socketio-setup](examples/day-2/04-socketio-setup/app.js)
* **Example**: [socketio-send](examples/day-2/04-socketio-send/app.js)
* socket.io: broadcasting data
* **Example**: [socketio-recieve](examples/day-2/04-socketio-recieve/app.js)
* [p5.js + node + socket.io](https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io)

### Assignment #3: Giphy Chat

Using the examples provided, create a web-based chat server/client using
Express and socket.io.

*However*, instead of sending text between clients, use the giphy translate API we [experimented with on Tuesday](examples/day-1/02-giphy/index.js) to turn everybody's messages into GIFs.

## Day 3: Web APIs

### Twitter APIs

* [Random Shopper](http://randomshopper.tumblr.com/post/35454415921/randomized-consumerism)
* [Random Darknet Shopper](https://wwwwwwwwwwwwwwwwwwwwww.bitnik.org/r/)
* [Darius Kazemi](http://tinysubversions.com/projects/)'s Twitter Bots
* Twitter Streams
  * [re:publica 2012 analogue twitter wall ](http://www.creativeapplications.net/processing/republica-2012-analogue-twitter-wall-by-precious-38378-printed-tweets/)
  * [Emoto](http://www.creativeapplications.net/javascript-2/emoto-captures-and-visualises-the-excitement-around-the-olympic-games/)
  * [Emoto Data Sculpture](http://www.creativeapplications.net/processing/emoto-data-sculpture-by-studio-nand-and-moritz-stefaner-drew-hemment/)
* [Twitter API: Setup](https://dev.twitter.com/oauth)
* [Twitter API: Streaming APIs](https://dev.twitter.com/streaming/overview)
* [Twitter API: Tweet API](https://dev.twitter.com/rest/reference/post/statuses/update)
* [Twitter API: Upload API](https://dev.twitter.com/rest/public/uploading-media)
* [require('fs')](http://nodejs.org/api/fs.html)
* Writing image output from Processing
* Posting images to Twitter

### Assignment #5: API experimentation

Create a project that creatively utilises one or more of Twitter's APIs. This
could be a Twitter bot, image generator/processor, visualisation, physical
manifestation or anything else that comes to mind.

## Extra

### Interfacing With Hardware

* [NodeBots](http://nodebots.io/)
* [Firmata](http://www.firmata.org/wiki/Main_Page)
* [Johnny Five](https://github.com/rwaldron/johnny-five)
* **Example**: [arduino-blinker](examples/day-2/08-arduino-blinker/app.js)
* **Example**: [arduino-button](examples/day-2/09-arduino-button/app.js)

### Arduino Chat

Building on top of our chat server:

1. Make an LED start strobing whenever a message is sent.
2. Send a message to clients on pressing a button.
3. Move a servo in response on incoming messages.

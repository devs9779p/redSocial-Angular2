'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var app = require('./app');
var port = process.env.PORT || 3000;
var server = require('http').Server(app);
var io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/redSocial-Angular2', {
    useMongoClient: true
  },
  (err, res) => {
    if (err)
      throw err
    else {
      app.listen(port, () => {
        console.log("-- App corriendo satisfactoriamente en puerto: " + port)
      })
    }
  })







// server.listen(5000, () => {
//   console.log('Server started on port 5000');
// });
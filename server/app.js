var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var firebase = require("firebase");
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
var config = {
  // ...
};
firebase.initializeApp(config);

var port = process.env.PORT || 3000;

// serve static files
app.use(bodyParser.json());
app.use(express.static(path.resolve('./server/public')));

// server index file
app.get('/info', function(req, res) {
    res.send("hello from the server");
});

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.use('/', function(req, res) {
  res.sendFile(path.join('./public/vendor/angular.min.js'));
});

app.listen(port, function() {
  console.log("server running, check localhost:3000");
});

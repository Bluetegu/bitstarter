var express = require('express');
var fs = require('fs');

var buffer = new Buffer(256);
buffer = fs.readFileSync('./index.html');
//console.log(buffer.toString());

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());  // sending buffer directly doesn't present it as html 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

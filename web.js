


var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indextext = fs.readFileSync('index.html', 'utf-8');

var bufferstring = indextext.toString('utf-8'); 

app.get('/', function(request, response) {
    response.send(bufferstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

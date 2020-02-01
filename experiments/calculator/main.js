/* https://socket.io/get-started/chat/ */
var express = require('express');
var app = express();
var http = require('http').createServer(app);
//var io = require('socket.io')(http);

//var users = [];
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
  });
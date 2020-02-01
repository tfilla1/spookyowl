/* https://socket.io/get-started/chat/ */
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var users = [];

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    io.emit('no user', 'no user');
    socket.on('new user', function(newUser) {
      users.push(newUser);
      console.log(users);
      io.emit('connected', users);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('message:' + msg);
    });
    socket.on('name change', function(user) {
        //users.push(newName);
        for (var i = 0; i < users.length; i++) {
          if (users[i].id === user.id) {
            users[i].name = user.name;
          }
        }
        io.emit('name change', users);
        console.log('name change' + user);
    })
    socket.on('disconnect', function(){
        console.log('user disconnected');
    })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});
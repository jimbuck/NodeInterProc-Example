var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

io.on('connection', function (socket) {
  console.log('someone connected');
  console.log(socket);

  // When a command is received...
  socket.on('command', function (command) {
    console.log('command recieved');

    // send the action to the web clients...
    socket.broadcast.emit('action', command);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

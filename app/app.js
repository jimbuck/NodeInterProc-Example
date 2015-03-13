var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');

socket.on('connect', function () {
  // socket connected
  socket.emit('forward', {
    action : 'message',
    data : {
      string : 'thing',
      number : 10
    }
  });
  
  socket.close();
});

var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');

var arguments = Array.prototype.slice.call(process.argv, 2);

if(!arguments || arguments.length === 0){
  console.error('Please enter arguments to send!');  
  process.exit();
}

var command = {
  action: arguments[0],
  args: arguments.slice(1)
};

socket.on('connect', function () {
  // socket connected
  socket.emit('command', command);
  
  socket.disconnect();
});

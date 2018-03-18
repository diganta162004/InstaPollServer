
const http = require('http');
const app = require('./app')

var port = normalizePort(process.env.PORT || '4000');
// app.set('port', port);

var server = http.createServer(app);

server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

// convert port string to integer
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  console.error('index.js error: ', error);
}

function onListening() {
  var addr = server.address();
  console.error('index.js listening: ', addr);
}

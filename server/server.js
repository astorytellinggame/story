const WebSocket = require('ws');

let uid = 1;
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  const id = uid++;
  console.log(`client (${id}) connection received`);

  ws.on('message', function message(message) {
    console.log(`message (${id}): %s`, message);
  });

  ws.on('close', function close(code, reason) {
    console.log(`close (${id}): code: %s. reason: %s`, code, reason);
  });

  ws.send('welcome from server');
});

console.log('server started');

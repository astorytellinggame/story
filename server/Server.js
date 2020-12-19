import WebSocket from 'ws';

let uid = 1;

export default class Server {
  constructor() {
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
  }

}

const wss = new WebSocket.Server({ port: 8080 });
import WebSocket from "ws";
import { log } from "./log";

let uid = 1;

export default class Server {
  constructor() {
    this.wss = new WebSocket.Server({ port: 8080 });
    this.wss.on("connection", function connection(ws) {
      const id = uid++;
      log(`client (${id}) connection received`);

      ws.on("message", function message(message) {
        log(`message (${id}): %s`, message);
      });

      ws.on("close", function close(code, reason) {
        log(`close (${id}): code: %s. reason: %s`, code, reason);
      });

      ws.send("welcome from server!");
    });
    this.wss.on("error", console.error);

    log("server started");
  }

  close() {
    return new Promise((resolve) =>
      this.wss.close(() => {
        log("server closed");
        // The individual ws 'close' callbacks trigger before the wss 'close'
        // callback, so give an extra click so that they flush before handing back
        // control to the code that calls close(). Without this, even synchronous
        // log messages from ws 'close' can come in after close() resolves
        // resulting in Jest nags or missed log messages.
        setTimeout(resolve, 0);
      })
    );
  }
}

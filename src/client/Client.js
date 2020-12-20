export default class Client {
  constructor() {
    this.status = 'initialized';
    this.callbacks = new Set();
  }

  connect() {
    this.status = 'connecting';
    this.callbacks.forEach((cb) => cb(this));

    const l = window.location;
    const protocol = l.protocol === "https:" ? "wss:" : "ws:";
    const suffix = protocol === 'wss:' ? '/ws' : ':8080';
    this.socket = new WebSocket(`${protocol}//${l.hostname}${suffix}`);
    this.socket.onopen = this.handleOpen.bind(this);
    this.socket.onerror = this.handleError.bind(this);
    this.socket.onclose = this.handleClose.bind(this);
  }

  close() {
    this.callbacks.clear();
    this.socket.close();
  }

  handleClose(event) {
    this.status = 'closed';
    this.callbacks.forEach((cb) => cb(this));
    this.callbacks.clear();
  }

  handleError(event) {
  }

  handleOpen(event) {
    this.status = 'connected';
    this.callbacks.forEach((cb) => {
      cb(this);
    });
  }

  subscribe(callback) {
    this.callbacks.add(callback);
    callback(this);
  }
}
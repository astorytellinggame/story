export default class Client {
  async connect() {
    return new Promise((resolve) => {
      const l = window.location;
      const protocol = l.protocol === "https:" ? "wss:" : "ws:";
      const suffix = protocol === 'wss:' ? '/ws' : ':8080';
      this.socket = new WebSocket(`${protocol}//${l.hostname}${suffix}`);
      this.socket.addEventListener('open', resolve);
    });
  }
}
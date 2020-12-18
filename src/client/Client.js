export default class Client {
  async connect() {
    return new Promise((resolve) => {
      const l = window.location;
      const protocol = l.protocol === "https:" ? "wss:" : "ws:";
      this.socket = new WebSocket(`${protocol}//${l.hostname}:8080`);
      this.socket.addEventListener('open', resolve);
    });
  }
}
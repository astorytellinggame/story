export function log() {
  if (process.env["NODE_ENV"] === "development") {
    console.log.apply(null, arguments);
  }
}

export function log() {
  if (process.env["VERBOSE"]) {
    console.log.apply(null, arguments);
  }
}

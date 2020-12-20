export function log() {
  if (process.env['VERBOSE_SERVER']) {
    console.log.call(null, arguments);
  }
}
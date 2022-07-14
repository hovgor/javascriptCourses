const through = require('through2');

const transform = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
})
process.stdin.pipe(transform).pipe(process.stdout);
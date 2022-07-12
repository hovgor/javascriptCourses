const http = require('http');
const net = require('net');
const fs = require('fs');

const port = process.argv[2];
const readStr = process.argv[3];
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    const readable = fs.createReadStream(readStr);
    readable.pipe(res);
    readable.on('end', function() { res.end() });
})

server.listen(port);


// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
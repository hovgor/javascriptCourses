const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

http.createServer((request, response) => {
    if(request.method === "POST"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        request.pipe(map((chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }else{
        response.writeHead(405);
    }
}).listen(+port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})


// 'use strict'
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
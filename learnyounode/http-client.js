const http = require('http');

const options = process.argv[2];

http.get(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
        console.log(data.toString());
    })
})




// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

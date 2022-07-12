const net = require('net');
const server = net.createServer((socket) => {
    let date = new Date();
    let fullYear = date.getFullYear();
    let month = data.getMonth() + 1;
    let formattedMonth = month < 10 ? '0' + month : month;
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    socket.end([fullYear, formattedMonth, day].join('-') + ' ' + [hours, minutes].join(':') + '\n');
});


server.listen(process.argv[2]);

// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
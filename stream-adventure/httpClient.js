const { request } = require('http');
const option = {method: 'POST'};

const req = request('http://localhost:8099', option, (res) => {
    res.pipe(process.stdout);
});
process.stdin.pipe(req);
const fs = require('fs');
const asd = process.argv[2];

fs.createReadStream(asd).pipe(process.stdout);
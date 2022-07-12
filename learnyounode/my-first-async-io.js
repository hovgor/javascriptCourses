const fs = require('fs');

const buf = fs.readFile(process.argv[2], 'utf8', (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let count = data.split('\n').length - 1;
    console.log(count);
});
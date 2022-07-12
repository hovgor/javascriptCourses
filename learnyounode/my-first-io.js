const fs = require('fs');
 let aaa = fs.readFileSync(process.argv[2]);
 let count = 0;
 const buf = aaa.toString()
for(let i = 0; i <= buf.length; ++i){
    if(buf[i] === '\n'){
        count++;
    }else{
        continue
    }  
}

console.log(count);


//     const contents = fs.readFileSync(process.argv[2])
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)
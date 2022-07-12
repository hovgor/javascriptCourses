 function literally(str){
    return /LITERALLY/.test(str);
}

module.exports = literally;

console.log(literally('LITERALLY'))
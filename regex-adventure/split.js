function fuSplit(str){
    console.log(str);
    return str.split(/\s*,\s*/);
}

console.log(fuSplit("asdasdasd"));

module.exports = fuSplit;
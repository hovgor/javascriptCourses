function meta(str){
    return /\.$/.test(str);
}
console.log(meta("asdasdaddd."));
module.exports = meta;
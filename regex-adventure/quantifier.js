function quantifier(str){
    return /^\d+\.jpe?g$/.test(str)
}
console.log(quantifier("123abc.jpeg"));

module.exports = quantifier;
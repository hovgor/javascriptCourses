function alteration(str) {
    return /^(cat|dog|robot)\d+$/.test(str);
}

console.log(alteration("dog123"));

module.exports = alteration;


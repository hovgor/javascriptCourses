 function characterClass(str){
    return /^[aeiouy0-9]/.test(str);
}

console.log(characterClass("uzsdwr wrw rdsfg "));

module.exports = characterClass;
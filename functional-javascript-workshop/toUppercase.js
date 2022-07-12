
const upperCaser = (input) => {
    if(typeof(input) === 'string'){
        return input.toUpperCase();
    }else{
        return console.error('this is number or simbol');
    }
}

module.exports = upperCaser;
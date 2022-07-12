
function doubleAll(numbers){
    let result = numbers.map((nums)=>{
        return nums * 2;
    });  
    return result;
}

module.exports = doubleAll;
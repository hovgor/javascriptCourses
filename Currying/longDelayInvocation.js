let arg = 0;
const secondFunction = (firstArgument) => {
    if(firstArgument === undefined){
        let result = arg;
        arg = undefined;
        return result;
    }else{
        arg = arg + firstArgument;
        return secondFunction;
    }
};

module.exports = secondFunction;
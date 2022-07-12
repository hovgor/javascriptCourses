const callAndApply = {
    caller: (obj, method, name, age, tShirtSize) => {
        method.call(obj, name, age, tShirtSize);
    },
    applier:(obj, method, arr) => {
        method.apply(obj, arr);
    }
}

const person = {
    name: 'Azat', age: 25, tShirtSize: 'XL'
}

// const obj1 = {};
// callAndApply.caller(obj1,)


module.exports = callAndApply;
// function hello () {
//     console.log("hello", this);
// }


// const person = {
//     name: "Gor",
//     age: 27,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(this),
//     logInfo: function(name, age, job = "programmer", phone = "+374"){
//         console.group(`${this.name} info: `)
//         console.log(`Name is ${name || this.name }`);
//         console.log(`Age is ${age || this.age }`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd()
//     }

// }

// const person2 = {
//     name: "Elena",
//     age: 45
// }


// person.logInfo.apply(person2,["asd","qwe"]);

// module.exports = person.logInfo




const slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
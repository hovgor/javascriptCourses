module.exports = function(namespace) {
    return console.log.bind(console, namespace)
  }

// const person = {
//     name: "Elena"
// }

// function info(){
//     console.log(`Name ${this.name}`);
// }

// const bound = info.bind(person)();
// module.exports = info
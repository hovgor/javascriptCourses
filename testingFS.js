// const fs = require('fs');
// const zlib = require('zlib');

// const readStream = fs.createReadStream('./learnyounode/text.txt');
// const writeStream = fs.createWriteStream('./learnyounode/new-text.txt');
// const compressStream = zlib.createGzip()

// // readStream.on('data', (chunk) => {
// //     writeStream.write('\n ----- CHUNK START ----- \n');
// //     writeStream.write(chunk);
// //     writeStream.write('\n ----- CHUNK END ----- \n');
// // })

// const handleError = () => {
//     console.log('Error');
//     readStream.destroy();
//     writeStream.end('Finished whit error .... ')
// }

// readStream
// .on('error', handleError)
// .pipe(compressStream)
// .pipe(writeStream)
// .on('error', handleError);

// // compressing the big file whit zlib


// console.log(typeof undefined == typeof null);



// const obj = {
//     name: 'Gor',
//     age: 27
// }

// console.log(obj.age);
// const obj2 = obj;
// obj2.name = 'Azat';
// console.log("obj => ", obj); //obj =>  { name: 'Azat', age: 27 }
// console.log("obj2 => ", obj2); //obj2 =>  { name: 'Azat', age: 27 }


// console.log('/////////////////////////////////////////');



var coins = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25
  };
  
  var coinsByAmount = ['q', 'd', 'n', 'p'];
  
  module.exports = {
    convertToChange: function(amount) {
      var change = [];
      for(var i in coinsByAmount){
        var coinType = coinsByAmount[i];
        var coinValue = coins[coinType];
  
        while(amount >= coinValue){
          change.push(coinType);
          amount -= coinValue;
        }
      }
      return change;
    }
  };

  console.log(convertToChange(89));
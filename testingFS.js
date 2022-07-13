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



//  var coins = {
//     'p': 1,
//     'n': 5,
//     'd': 10,
//     'q': 25
//   };  
//   var coinsByAmount = ['q', 'd', 'n', 'p'];
  
//   module.exports = {
//     convertToChange: function(amount) {
//       var change = [];
//       for(var i in coinsByAmount){
//         var coinType = coinsByAmount[i];
//         var coinValue = coins[coinType];
  
//         while(amount >= coinValue){
//           change.push(coinType);
//           amount -= coinValue;
//         }
//       }
//       return change;
//     }
//   };

// //  console.log(convertToChange(89));


function fib(num){
if(num < 2){
	return 1;
   }else{
	return fib(num -2) + fib(num - 1);
    }
}


// // console.log(fib(7));


// function regStrfirst3let(str){
// console.log(str);
// let result = /\d(?:\D*\d){2}/.exec(str);
// console.log(result);
// }


// regStrfirst3let('asdewr123dfgtry1234');




// let swap = (a,b)=>{
//   a = a - b;//-9
//   b = a + b;//-4
//   a = b - ( a);//5
//   return a, b;
// }

// let x = 3;
// let y = 5;

// swap(x,y);

// console.log(x);




// const FibonacciNumber = (number) => {
//     let k = 0;
//     let z = 1;
//     let result = [];
//     for (let i = 0; i < number / 2; ++i) {
//       k = k + z;
//       result.push(k);
//       z = z + k;
//       result.push(z);
//     }
//     return result;
//   };
  
//   console.log(FibonacciNumber(2));


//   console.log(fib(2));



//   function fibs(count){
//     let k = 0;
//     let z = 1;
//     let result = [1];

//     for(let i = 0; i < count; ++i){
//         if(result[i-1]){
//             k = result[i-1];
//         }
//         z = k + result[i];
//         k = z;
//         result.push(z);
//     }
// return result;

//   }



//   console.log(fibs(7));





console.log(fib(2));




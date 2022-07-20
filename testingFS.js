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


// function fib(num){
// if(num < 2){
// 	return 1;
//    }else{
// 	return fib(num -2) + fib(num - 1);
//     }
// }


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





// // console.log(fib(2));
// const arr = [1,2,3,4];
// let newarr = arr.forEach((elem)=>{
//     let z = elem * 2;
//     console.log(z);
// });
// console.log('foreach => ',newarr);

// const WebSocket = require('ws');


// let socket = new WebSocket("wss://localhost:3011");

// socket.onopen = function(e) {
//     if(e)return new Error('erroring!!!');
//     console.log("[open] Соединение установлено");
//   console.log("Отправляем данные на сервер");
//   socket.send("Меня зовут Джон");
// };

// socket.onmessage = function(event) {
//     console.log(`[message] Данные получены с сервера: ${event.data}`);
// };

// socket.onclose = function(event) {
//   if (event.wasClean) {
//     console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//   } else {
//     // например, сервер убил процесс или сеть недоступна
//     // обычно в этом случае event.code 1006
//     console.log('[close] Соединение прервано');
//   }
// };

// socket.onerror = function(error) {
//   console.log(`[error] ${error.message}`);
// }

// const _ = require('lodash');

// const arr = [1,2,3,4,5];
//  const arr2 = _.without(arr,1,2);
//  console.log(arr2);
//  console.log(arr);

// const arr = ['aa', 'Ba'];
// arr.sort();
// console.log(arr);




// const balls = ['Ball', 'Ball s', ' bald'].sort((a,b)=>{
//     a+b
// });
// console.log(balls);
// var re = /\s* \s*/;

// let jjj =balls[1].split(re)
// console.log(jjj);

// let callCount = 0;
//       const compare = (a,b) => {
//   a-b
//        };
//       let zzz=['3', '1', 2, '11'].sort(compare)
//       console.log(zzz);



// let aaa = Array.from({ length: 5 }, ( v,k) => 
// {
// return k

// });
// console.log(aaa);
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']





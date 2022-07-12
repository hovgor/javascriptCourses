// all copy 

function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
      if (index > arr.length - 1) return value // end condition
      return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
  }
  
  module.exports = reduce

// function toUpperArray(items) {
//     if (!items.length) return [];
//     const head = items[0];
//     head = head.toUpperCase();
//     const tail = items.slice(1);
//     return [head].concat(toUpperArray(tail));
//  }
 
//  console.log(toUpperArray(['hello', 'world', 'asd', 'qwe']));

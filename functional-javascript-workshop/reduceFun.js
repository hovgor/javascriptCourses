const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    

function countWords(arr) {
    return arr.reduce((countMap, word) => {
      countMap[word] = ++countMap[word] || 1 ;
      return countMap;
    }, {}) 
  }
  console.log(countWords(inputWords));
  
module.exports = countWords;


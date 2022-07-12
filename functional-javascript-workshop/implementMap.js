const myMap = (arr,foo, Ithis) => {
   const tmp = arr.reduce(function(acc, item, index, arr){
    acc.push(foo.call(Ithis, item, index, arr));
    return acc;
   }, []);
   return tmp;
}



let a = myMap([1,2,3,4],(item)=>{
    item + 5;
})

console.log(a);




// module.exports = myMap;
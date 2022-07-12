function zz(){
    console.log('aaaa22222')
}


function foo(foo1, num){
 if(num){
    foo1();
    num = num - 1;
    return foo(foo1, num);
 }
 return;
}

module.exports = foo;
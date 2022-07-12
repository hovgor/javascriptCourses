function Spy(butt, method){
    const orgFoo = butt[method];

    const result = {
        count: 0,
    }
    butt[method] = function() {
        result.count++; 
        return orgFoo.apply(this, arguments);
    }
    return result;
}


var spy = Spy(console, 'error')
    
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    
    console.log(spy.count)


    module.exports = Spy;
let tArray = ["just", "a", "test", "with", "arrays"];

let copyA = tArray.filter(elem => {
    return elem.length < 2;
})

console.log(copyA);


const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log("wwut", array1.copyWithin(0, 1, 2));
console.log(array1.entries().next().value);

console.log("find", tArray.find(elem => elem.length < 2))

console.log("find", tArray.findIndex(elem => elem.includes('test')))

console.log("find", tArray.includes('tes'))

console.log("find", tArray.join('@') )


let isCeroArray = ["1", "0", "1", "1", "1"];

let is = isCeroArray.reduce((acum, current)=>{

    let temp = current === '0' || acum === 1? 1: -1; 
    return temp
})

console.log("indeed is", is);

console.log("shitf", isCeroArray.shift(), isCeroArray);

console.log("slice", isCeroArray.slice(0,1));


setTimeout(function() {
    console.log('Primero');
    }, 0);
 console.log('Segundo');

const makeHello = function(name){
    return function(){
        console.log('Hello ' + name)
    }
}

const hello1 = makeHello('Mateusz') // zwraca fn i przypisuje do zmiennej
const hello2 = makeHello('Bartek') 

hello1()
hello2()

console.log(hello1 === hello2); // false

const callWithNumber2 = function(fn){
    return fn(2)
}

const add2 = function(x){
    return x + 2
}

const sum = callWithNumber2(add2)
console.log(sum);

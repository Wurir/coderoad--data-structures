const makeHello = function(){
    return function(){
        console.log('Hello')
    }
}

const hello1 = makeHello() // zwraca fn i przypisuje do zmiennej
const hello2 = makeHello() 

hello1()
hello2()

console.log(hello1 === hello2); // false

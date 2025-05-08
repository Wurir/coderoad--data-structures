const makeHello = function(){
    return function(){
        console.log('Hello')
    }
}

const hello1 = makeHello() // zwraca fn i przypisuje do zmiennej
hello1()

makeHello()() // zwraca i wywoluje funkcje 
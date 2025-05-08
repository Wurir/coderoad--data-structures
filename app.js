const hello = function(){
    console.log('Hello')
}

const makeHello = function(){
    return hello
}

const hello1 = makeHello() // zwraca fn i przypisuje do zmiennej
hello1()

makeHello()() // zwraca i wywoluje funkcje 
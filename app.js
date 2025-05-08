const hello = function(){
    console.log('Hello')
}

const makeHello = function(){
    return hello
}

const hello1 = makeHello()
hello1()
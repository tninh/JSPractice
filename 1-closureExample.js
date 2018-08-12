function makeHelloFunction(){
    const message = 'Hello!'

    function sayHello(){
        console.log(message)
    }
    return sayHello
}
const sayHello = makeHelloFunction()
//console.log(message)
console.log('type of message:', typeof message)
console.log(sayHello.toString())
sayHello()
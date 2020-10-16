const sayHello = (name) => {
    
    if (typeof name === "string") {

        return `Hello, ${name}`;
    }
    
}
const name = "Oleg"

console.log(sayHello(name));

const sayHellow = function (name) {
    if (typeof name === "string") {

        return `Hello, ${name}`;
    }
}
alert(sayHellow('Adrian'));

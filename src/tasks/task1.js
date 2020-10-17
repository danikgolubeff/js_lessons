const sayHello = (name) => {

    if (typeof name === "string") {

        return `Hello, ${name}`;
    }

}
const name = "Oleg"

console.log(sayHello(name));

const sayHellow = function (name2) {
    if (typeof name2 === "string") {
        if (name2 === 'Mark')
            return `HI, ${name}`;
    }
}
const name2 = "Mark"

alert(sayHellow('name2'));




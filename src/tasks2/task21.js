const numbers = [1, 2, 3, 4, 5, 6, 7];

const someFunction = (arrN) => {
    if (!Array.isArray(arrN)) return;

    return arrN.map((number1) => {
        return number1 * 3;
    });
};
console.log(someFunction(numbers));

const numberArr = [4, 2, 5];

const ourFunc = (arr) => {
    if (!Array.isArray(arr)) return;

    return arr.map((number2) => {
        return number2 * 3;
    });
};
console.log(ourFunc(numberArr));
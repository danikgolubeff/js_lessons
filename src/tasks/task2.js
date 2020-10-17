const minimalNumber = (a, b) => {
    if (typeof a === "number" || typeof b === "number") {
        if (a > b) {

            return b;
        }
        if (b > a) {

            return a;
        }
        return 'equally';
    }
}
console.log(minimalNumber(2, 5));
console.log(minimalNumber(3, -1));
console.log(minimalNumber(1, 1));

const findMin = (firstNumber, SecondNumber) => {
    if (typeof firstNumber !== 'number' || typeof SecondNumber !== 'number') return;
    if (firstNumber === SecondNumber) return 'Equalite'
    return Math.min(firstNumber, SecondNumber);
}
console.log(findMin(-1, 4));
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

const minimalNumber2 = function (c, d) {
    if (typeof c === "number" || typeof d === "number") {
        if (c > d) {

            return d;
        }
        if (d > c) {

            return c;
        }
        return 'equally';
    }
}
console.log(minimalNumber2(8, 3));
console.log(minimalNumber2(-3, -1));
console.log(minimalNumber2(7, 7));
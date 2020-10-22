const sumArr = [1, 2, 3, 4, 5];

const sumFunc = (arrS) => {
    if (!Array.isArray(arrS)) return;
    return arrS.reduce((result, currentNumber) => {
        return result += currentNumber
    }, 0);

};
console.log(sumFunc(sumArr));


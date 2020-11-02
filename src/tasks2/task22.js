const tales = [1, 2, 3, 4, 5, 6, 7];

const someFunc = (arrN) => {
    if (!Array.isArray(arrN)) return;

    return arrN.map((num1, index) => {
        if (index === 0 || index === (arrN.length - 1)) {
            return Math.pow(num1, 2);
        }
        return num1 + 1;


    });
};
console.log(someFunc(tales));
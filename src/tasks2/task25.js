const diferrent = [1, 2, null, 'hello', 10, undefined];

const difFunc = (arrDiff) => {

    if (!Array.isArray(arrDiff)) return;


    return arrDiff.map((element) => {
        if (typeof element === 'number')
            return element.toString();
        if (typeof element === 'string')
            return element.toUpperCase();

    })

};

console.log(difFunc(diferrent));
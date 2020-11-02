const wordArr = ['Hello', 'kek', 'aws', 'world', 'I love JavaScript'];

let wordFunc = (arrW) => {
    if (!Array.isArray(arrW)) return;
    return arrW.filter((wordElement, index, currentArr) => {
        if (wordElement.length > 3) {
            return wordElement;
        };

    });
};
console.log(wordFunc(wordArr));


const anyArr = ['asd', 'www', 'lol', 'React'];

let charFunc = (arrChar) => {
    if (!Array.isArray(arrChar)) return;
    return arrChar.filter((wordElem, index, currentArr) => {
        if (wordElem.length > 3) {
            return wordElem;
        };

    });
};
console.log(charFunc(anyArr));


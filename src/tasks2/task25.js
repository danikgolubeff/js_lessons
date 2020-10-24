const diferrent = [1, 2, null, 'hello', 10, undefined];

const difFunc = (arrDiff) => {

    if (!Array.isArray(arrDiff)) return;


    return arrDiff.filter((element) => {
        return typeof element === 'string' || typeof element === 'number'

    });

};
const filteredDifferent = difFunc(diferrent);



const difFunction = (arrDiffer) => {

    return arrDiffer.map((newElement) => {

        if (typeof newElement === 'number')

            return (newElement * 2).toString();

        if (typeof newElement === 'string')
            return newElement.toUpperCase();

    })

};

console.log(difFunction(filteredDifferent));
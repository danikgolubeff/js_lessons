// const diferrent = [1, 2, null, 'hello', 10, undefined];

// const difFunc = (arrDiff) => {

//     if (!Array.isArray(arrDiff)) return;


//     return arrDiff.filter((element) => {
//         return typeof element === 'string' || typeof element === 'number'

//     });

// };
// const filteredDifferent = difFunc(diferrent);



// const difFunction = (arrDiffer) => {

//     return arrDiffer.map((newElement) => {

//         if (typeof newElement === 'number')

//             return (newElement * 2).toString();

//         if (typeof newElement === 'string')
//             return newElement.toUpperCase();

//     })

// };

// console.log(difFunction(filteredDifferent));

const arr = [1, 2, null, 'hello', 10, undefined];
const OurFunc = (arr) => {
    if (!Array.isArray(arr)) return;

    return arr
        .filter((item) => typeof item === 'string' || typeof item === "number")
        .map((item) => typeof item === "string" ? item.toUpperCase() : (item * 2).toString());
};
console.log(OurFunc(arr));
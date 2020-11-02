// // 1 вариант
// function digitalRoot(num) {
//     if (typeof num !== "number") return;

//     return (num - 1) % 9 + 1;
// }
// console.log(digitalRoot(768993836));
// // 2 вариант
// const digitalRoot2 = (numbersValue) => {
//     if (typeof numbersValue !== 'number') return;

//     while (numbersValue.toString().length !== 1) {
//         numbersValue = numbersValue.toString().split('').reduce((result, currentValue) => {
//             result += +currentValue;
//             return result;
//         }, 0)
//     }
//     return numbersValue;
// }
// console.log(digitalRoot2(45678909876));


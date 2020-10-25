// ЗАДАЧА 2 ФИЛЬТРУЕМ ПО ИМЕНИ И ИНДЕКСУ
// const users = ['Alex', 'Oleg', 'Dmitriy', 'Maria', 'Olga'];

// const userGenerator = (usersArray) => {
//   if (!Array.isArray(usersArray)) return;

//   return usersArray.map((userName, index) => ({
//       name: userName,
//       id: index
//     })
//     // иместо return стамим скобки
//   )
// }


// console.log(userGenerator(users))



//     // ЗАДАЧА 2 ФИЛЬТРУЕМ ПО ВОЗРАСТУ
// const users = [
//     {
//       name: 'Oleg',
//       age: 25
//     },
//     {
//       name: 'MAx',
//       age: 17
//     },
//     {
//       name: 'Petr',
//       age: 22
//     },
//     {
//       name: 'Michail',
//       age: 33
//     },
//     {
//       name: 'Marina',
//       age: 65
//     },
//   ];
//   const filterUsers = (usersArray) => {
//     if (!Array.isArray(usersArray)) return;

//     return usersArray.filter((user) => user.age >= 22)

//   }


//   console.log(filterUsers(users))

// ЗАДАЧА 3 кладем бренд в корзину
// const brands = ['Adida', 'Nike', 'Gucci', 'Nike'];

// const generateCard = (vendorsArray) => {
//   if (!Array.isArray(vendorsArray)) return;

//   return vendorsArray.reduce((result, vendorName, index) => {
//     if (!result.hasOwnProperty(vendorName)) {
//       result[vendorName] = index;
//     }
//     return result;

//   }, {})
// };
// console.log(generateCard(brands))
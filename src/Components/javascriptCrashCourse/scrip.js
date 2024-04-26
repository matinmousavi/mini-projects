//  Destructuring Objects and Arrays
const employ = {
  nameha: "mahdi",
  familyName: "khorshidi",
  age: 12,
};

// const { name: names = "mahdi", familyName } = employ;
// const [,,,,a] = grades
// console.log(names);
// console.log(a)

//  Rest -Spread Operator
// const [a, b, ...rest] = grades;
// console.log(a, b, rest.at(-1));
// const gradeha = [...grades,67,87,89]
// console.log(gradeha)

// const {nameha , ...karmand} = employ

// console.log(nameha,karmand)

// const karmand = {tahsilat : "diplom",...employ}

// console.log(karmand)

// Template Literals , Ternaries Instead of ifelse Statements
// if (employ.nameha) {
//   console.log(employ.age);
// }

// grades.map(mahdi);

// function mahdi(item, index, arr) {
//   console.log(`${item},${index},${arr}`);
// }

// let mahdi = function(){

// }
// let mahdi = ()=>{console.log('mahdi')}

// console.log(`${employ.nameha}`);

// Functions , Short-Circuiting And Logical Operators ,Optional Chaining

// console.log(false && grades[1] && grades[2]) // noting
// console.log('' || grades[1]) //
// console.log('' ?? grades[1]) //
// console.log('' && grades[1])
// ||
// ??
// ?.

// The Array Methods
const grades = [12, 43, 56, 123, 34, [34], [45], [23, [43, [89]]]];

// grades.map(item=>{
//     item.map()
// })

// console.log(
//   grades
//     .flat()
//     .flat()
//     .flat()
//     .flatMap(function (item) {
//       return item + 100;
//     })
// );

// Working With Immutable Arrays

// Asynchronous JavaScript Promises ,Asynchronous JavaScript AsyncAwait
// let dataRes = {};
// const host = "api.frankfurter.app";
// let data = fetch(`https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.table(data);
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

// let dataRes = {};

// async function fetchMoney(amount, from, to) {
//   let res = await fetch(
//     `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
//   );
//   let data = await res.json();
//   return data;
// }
// dataRes =fetchMoney(100, "USD", "EUR");
// console.log(dataRes);

// let res = await fetch(
//   `https://api.frankfurter.app/latest?amount=100&from=USD&to=EUR`
// );
// let data = await res.json();

// console.log(data);

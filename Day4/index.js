// // const produto = {
// //   nome: "Guilherme",
// //   numero: "62993474444",
// //   ddd: 62,

// // }

// // produto.stock = null;

// // console.log(produto)
// /*const turma92 = {
//   numeroDeAlunos: 26, 
//   local: "zoom",
//   estudantes: ["Priscila", "Annielli", "Ewerton", "Marcio", "Jino"],
//   professores: {
//     LT: "Karen", 
//     TA1: "Jino", 
//     TA2: "Dani",
//   },
// }

// console.log(turma92.estudantes[1])*/

// const school = {
//   name: "Fake School 1",
//   classRooms: [
//     {
//       teacher: {
//         firstName: "Marcelino",
//         lastName: "Padberg",
//         age: 25,
//       },
//       students: [
//         {
//           firstName: "Aliyah",
//           lastName: "Schulist",
//           age: 18,
//         },
//         {
//           firstName: "Cleveland",
//           lastName: "Towne",
//           age: 28,
//         },
//         {
//           firstName: "Jan",
//           lastName: "Quitzon",
//           age: 18,
//         },
//         {
//           firstName: "Alaina",
//           lastName: "Runolfsdottir",
//           age: 18,
//         },
//         {
//           firstName: "Gerhard",
//           lastName: "Bergstrom",
//           age: 23,
//         },
//       ],
//     },
//     {
//       teacher: { firstName: "Edwardo", lastName: "Schowalter", age: 28 },
//       students: [
//         { firstName: "Manley", lastName: "Doyle", age: 18 },
//         { firstName: "Maximilian", lastName: "Gleichner", age: 19 },
//         { firstName: "Sid", lastName: "Rohan", age: 30 },
//         { firstName: "Catalina", lastName: "Hilpert", age: 27 },
//         { firstName: "Gerald", lastName: "O'Keefe", age: 26 },
//       ],
//     },
//   ],
// };

// console.log(school)

// // console.log(school.classRooms[0].students[3].firstName)
// // console.log(school.classRooms[1].teacher.firstName)

function getSum(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
  sum += array[i];
  }
 console.log(sum)
}

getSum([1, 2, 3, 4, 5]);

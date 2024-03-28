// const numeros = [10, 20, 30, 40]
// for(let i = 0;  i < numeros.length; i++){
//   if(numeros[i] === 20){
//     continue;
//   }
// console.log(numeros[i]);
// }
// function getsum(num1, num2){
//   return num1 + num2;
// }
// console.log(getsum(4, 3));
// const getName = () => {
//   console.log("Dentro da variável")
// }
// const getGrades = function () {
//   console.log;
// }
// const name = () => {
//   console.log('')

// }

// function isEven(number){

//   if(number % 2 === 0){
//     return true;
//   } else return false;
// }

// function getRandomNumberEven(isEven){

//   let randomNumber = Math.floor(Math.random() * 100);
//   console.log(`Criamos o numero randomico: ${randomNumber}`);

//   let result = isEven(randomNumber); // isso aqui vai retornar verdadeiro ou falso.
//   console.log(`Verificando se o numero randomico eh par:  ${result}`);

//   if(result){
//     console.log(`Seu numero randômico e par é:  ${randomNumber}`)
//   } else{
//     console.log('como nao foi par vamos tentar novamente.')
//     return getRandomNumberEven(isEven);
//   }

// }

// getRandomNumberEven(isEven);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function getRandomEven(element) {
//   let randomNumber = Math.floor(Math.random() * 100);
//   console.log(`Criei um número aleatório arredondado:  ${randomNumber}`);

//   let result = isEven(randomNumber);
//   console.log(`Chegando se o numero é par: ${result}`);

//   if (result === true) {
//     return `seu número randomico e par é ${randomNumber}`;
//   } else {
//     console.log("O numero não foi par vamos tentar novamente");
//     return getRandomEven(element);
//   }
// }
// getRandomEven();

// function multiply10(number){
//   return number * 10;
// }

// console.log(multiply10(() =>{
//   let randomNumber = Math.floor(Math.random() * 100);
//   return randomNumber;

// }));

// FOR EACH ITERA SOBRE MINHA ARRAY

// const numbers = [2, 4, 43, 50, 32];
// let numbersByNumbers = [];
// let maiorQue40 = [];
// numbers.forEach((element) => {
//   if (element > 40) {
//     maiorQue40.push(element);
//   }
// });
// console.log(maiorQue40);


const places = [
  {
  title: "Awesome Suite 20' away from la lambia",
  price: 200,
  type: "Private room",
  pool: true,
  garage: false,
},
{
  title: "Private apartment",
  price: 190,
  type: "Entire Place",
  pool: true,
}
]

// .map()

// const precos = places.map((element) =>{
//   return element.price
// })

// const precosReal = places.map((element) => {

//   return {
//     title: element.title,
//     precoReal: element.price * 5,

//   }

// })
// console.log(precosReal.length)

// .filter();

const salarios = [{
  rafaella: 1000,
  guilherme: 2000,
  ronaldo: 3000,
  janai: 4000
}]

function isBig(element){
  return element >= 1000;
}

const filtrada = salarios.filter((element)=>{
  return element.rafaella > 90; 

});

console.log(filtrada)

function myFunction(callback){
  callback()
}

myFunction(function () {
  console.log('Hello World')
})
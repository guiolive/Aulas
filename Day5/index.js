// const numbers = [10, 20, 30, 50, 60];

// for(let i = 0; i<numbers.length; i++){
//   if(numbers[i] === 20){
//     continue;
//   }
// }

// const wordsFind = [
//   "machine",
//   "subset",
//   "trouble",
//   "starting",
//   "matter"
// ]

// if(wordsFind.includes("trouble")){
//  console.log("achamos")
// }

// function getSum(num1, num2){
//   return num1 + num2;
// }

// console.log(getSum(3, 5));

// objetivo: Função que vai me dar um numero randomico todas as vezes que ela for invocada. Esse numero só pode ser par.

function isEven(element) {
  if (element % 2 === 0) {
    return true;
  } else return false;
}

function getRandomEven(element) {
  let random = Math.floor(Math.random() * 100);
  let result = element(random);
  if (result) {
    console.log(`O número checado é par e é o número: ${random}`);
  } else {
    console.log(`O número checado não é par e o resultado é ${random}`);
    return getRandomEven(isEven);
  }
}

getRandomEven(isEven);

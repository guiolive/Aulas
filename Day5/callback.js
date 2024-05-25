// Trata-se de uma função que é passada para outra como argumento.
// Exercício para explicação: Faça uma função que retorne um número randômico PAR.
//Dividir para conquistar, vamos primeiro criar uma função que verifica se é par.
function isEven(element) {
  return element % 2 === 0;
}

function getRandomNumberEven(callback) {
  let randomico = Math.floor(Math.random() * 100);
  let randomicoPar = callback(randomico);

  if (randomicoPar) {
    return `Seu número randômico par é ${randomico}`;
  } else {
    console.log(`Seu número é ${randomico}, não é par`);
    return getRandomNumberEven(isEven);
  }
}

getRandomNumberEven(isEven);

function multiplicador(numero){
  return numero() * 10;

}

function random(){
  return  Math.floor(Math.random() * 100);
}

console.log(multiplicador(random))


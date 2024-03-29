// Trata-se de uma função que é passada para outra como argumento.
// Exercício para explicação: Faça uma função que retorne um número randômico PAR.
//Dividir para conquistar, vamos primeiro criar uma função que verifica se é par.
function isEven(element) {
  return element % 2 === 0;
}

// Agora vamos criar uma função que retorna um numero randômico de 0 a 99 PAR.
function getRandomEven(callback) {
  let randomNumber = Math.floor(Math.random() * 100);

  if (callback(randomNumber)) {
    return `Seu número randômico e  par é ${randomNumber}`;
  } else {
    console.log("O número randômico gerado foi ímpar, vamos tentar novamente");
    return getRandomEven(callback);
  }
}

console.log(getRandomEven(isEven));

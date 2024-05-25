/* FOREACH executa uma função em cada item da array
lembrando que sempre retornará um array do mesmo tamanho.  */

const numbers = [3, 4, 5, 6, 7, 45, 65];
let multiplicador;

multiplicador = numbers.forEach((element)=>{
  return element * element
})

const maiorQue40 = [];

numbers.forEach((element, index)=>{
  if(element > 40){
    maiorQue40.push(element);
  }
})

console.log(maiorQue40)





const servidores = [
  "Jouglas",
  "Guilherme", 
  "Magalhães",
  "Ricardo"
]

if(servidores.includes("Jouglas")){
  console.log("Encontramos o funcionário que vc está procurando")
} else{ 
  console.log("Funcionário não encontrado")
}

function getSum(num1, num2){
  return num1 + num2
}

console.log(getSum(3,5))
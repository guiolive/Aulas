const numbers = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];
const places = [
  { title: "Apartment 10 from la rambia", price: 930, type: "Entire place", pool: true, garage: true },
  { title: "Villa 25 from la rambia", price: 1200, type: "Entire place", pool: true, garage: false },
  { title: "Cottage 15 from la rambia", price: 750, type: "Private room", pool: false, garage: true },
  { title: "Bungalow 31 from la rambia", price: 900, type: "Shared room", pool: false, garage: false },
];

const acumulador = numbers.reduce((contador, element) => {
  console.log(`nesse momento o contador tem valor = ${contador}`);
  return element + contador;
}, 0);

console.log(acumulador);


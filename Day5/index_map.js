// map(). Retorna uma nova array exatamente do mesmo tamanho da array original
const places = [
  { title: "Apartment 10 from la rambia", price: 930, type: "Entire place", pool: true, garage: true },
  { title: "Villa 25 from la rambia", price: 1200, type: "Entire place", pool: true, garage: false },
  { title: "Cottage 15 from la rambia", price: 750, type: "Private room", pool: false, garage: true },
  { title: "Bungalow 31 from la rambia", price: 900, type: "Shared room", pool: false, garage: false },
];

const novaArray = places.map((element) => {
  return element.title;
}) 

const precosReal = places.map((element) =>{
  return element.price * 5.2;
})

const tituloPreco = places.map((element)=>{
  return {
    title: element.title,
    price: element.price,
  }
})


console.log(novaArray)
console.log(precosReal)
console.log(tituloPreco)
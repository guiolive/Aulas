const places = [
  { title: "Apartment 10 from la rambia", price: 930, type: "Entire place", pool: true, garage: true },
  { title: "Villa 25 from la rambia", price: 1200, type: "Entire place", pool: true, garage: false },
  { title: "Cottage 15 from la rambia", price: 750, type: "Private room", pool: false, garage: true },
  { title: "Bungalow 31 from la rambia", price: 900, type: "Shared room", pool: false, garage: false },
];


const pools = places.filter((element)=>{
  return element.pool == false && element.price < 900;
  
});

const pool = places.filter((element) => element.pool == false | element.price < 900)

console.log(pool)


s
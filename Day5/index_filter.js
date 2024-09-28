const places = [
  {
    title: "Apartment 10 from la rambia",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Villa 25 from la rambia",
    price: 1200,
    type: "Entire place",
    pool: true,
    garage: false,
  },
  {
    title: "Cottage 15 from la rambia",
    price: 750,
    type: "Private room",
    pool: false,
    garage: true,
  },
  {
    title: "Bungalow 31 from la rambia",
    price: 900,
    type: "Shared room",
    pool: false,
    garage: false,
  },
];

const filtrada = places.filter((element) => {
  return element.title === "Bungalow 31 from la rambia";
});

const baratos = places.filter((element) => {
  return element.price <= 900;
});

console.log(baratos);

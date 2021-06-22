let cars = [
  {
    make: "Ford",
    model: "Ranger",
    year: 1997
  },

  {
    make: "Honda",
    model: "Civic",
    year: 1989
  },

  {
    make: "Subaru",
    model: "Outback",
    year: 2015
  }
];

// what does this print
console.log(cars.length);

// iterate over the array cars
for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  console.log();
  console.log(`Car ${i + 1}.`)
  for (let prop in car) {
    console.log(`car.${prop} = ${car[prop]}`);
  }
}
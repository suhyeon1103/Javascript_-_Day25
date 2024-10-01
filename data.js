// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const mapped = evenNumbers.map((item) => item ** 2);
// const reduced = mapped.reduce((acc, curr) => acc + curr);

// console.log(evenNumbers);
// console.log(mapped);
// console.log(reduced);

// const 과일들 = ["apple", "banana", "cherry"];
// const uppercase_과일들 = 과일들.map((과일) => 과일.toLocaleUpperCase());

// console.log(uppercase_과일들);

// const words = ["apple", "banana", "pear", "cherry"];
// const longWords = words.filter((word) => word.length >= 5);

// console.log(longWords);

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];

// const sumOfproducts = products.reduce((acc, curr) => acc + curr.price, 0);

// console.log(sumOfproducts);

// const numbers = [1, 2, 3, 4, 5, 6];
// const found = numbers.find((number) => number > 3);
// const index = numbers.findIndex((number) => number > 3);

// console.log(found);
// console.log(index);

// const numbers = [1, 2, 3, 4, 5];
// const hasEven = numbers.some((number) => number % 2 === 0);

// console.log(hasEven);

// const numbers = [2, 4, 6, 7];
// const allEven = numbers.every((number) => number % 2 === 0);

// console.log(allEven);

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flattened = nestedArray.flat();

// console.log(flattened);

// const fruits = ["apple", "banana", "cherry"];
// const hasApple = fruits.includes("apple");
// const hasBerry = fruits.includes("berry");

// console.log(hasApple);
// console.log(hasBerry);

// const numbers = [4, 6, 9, 1, 5];
// numbers.sort((a, b) => a - b);

// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1);

// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const sliced = numbers.slice(0, 4);
// const sliced2 = numbers.slice();

// console.log(sliced);
// console.log(sliced2);

// const car = {
//   brand: "Tesla",
//   model: "Model 5",
//   year: 2024,
//   start: function () {
//     console.log(`${this.brand}: ${this.model}가 시동이 걸립니다.`);
//   },
// };

// console.log(car.brand);

// car.start();

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   start() {
//     console.log(`${this.brand} ${this.model} 시동이 걸립니다.`);
//   }
// }

// const myCar = new Car("Honda", "Civic", 2021);

// myCar.start();

// class Car {
//   constructor(model) {
//     this.model = model;
//     this.mileage = 0;
//   }

//   drive(distance) {
//     this.mileage += distance;
//     console.log(`${this.model}가 ${distance}km 주행했습니다.`);
//   }

//   getMileage() {
//     console.log(`${this.model}의 주행거리: ${this.mileage}km`);
//   }
// }

// const car1 = new Car("Tesla");
// const car2 = new Car("BMW");

// car1.drive(100);
// car1.getMileage();

// car2.drive(200);
// car2.getMileage();

// const array = [1, 2, 3];

// array.push(4);

// console.log(array);

// const array = [1, 2, 3];

// array.pop();

// console.log(array);

// const array = [1, 2, 3];
// const copiedArray = [...array];

// copiedArray.push(4);

// console.log(array);
// console.log(copiedArray);

// const nestedArray = [
//   [1, 2],
//   [3, 4],
// ];
// const deepCopiedArray = JSON.parse(JSON.stringify(nestedArray));

// deepCopiedArray[0].push(5);

// console.log(nestedArray);
// console.log(deepCopiedArray);

const array = [1, 2, 3];

Object.freeze(array);

array.push(4);
console.log(array);

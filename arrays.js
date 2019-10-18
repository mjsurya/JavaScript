// let numbers = [1,2,3,4,5]
// console.log(numbers)

// let cars = ['Honda', 'Toyota', 'Mercedes', 'Ford']
// console.log(cars)
// console.log(cars[2])

// cars.push ('Nissan')

// console.log(cars)

// console.log(cars.length)

// let x;

// for (x in cars){
//     console.log(x)
// }

// for (x of cars){
//     console.log(x)
// }

let fruits = ['Apple', 'Banana', 'Grapes']
console.log(fruits)

fruits.pop();
console.log(fruits)

fruits.shift();
console.log(fruits)

fruits.push('Cherry')
console.log(fruits);

fruits.unshift('Lemon')
console.log(fruits)

delete fruits[1];
console.log(fruits)

fruits[1]='Orange'
console.log(fruits)

fruits.splice(1,2)
console.log(fruits)

fruits.splice(2, 0, 'Orange','Cherry')
console.log(fruits)

let citrusFruits = fruits.slice(0,2)
console.log(fruits)
console.log(citrusFruits)

let evenNumbers =[2, 4, 6]
let oddNumbers =[1, 3, 5]
let primeNumbers = [2, 3, 5]
let numbers = evenNumbers.concat(oddNumbers, primeNumbers)
console.log(numbers)

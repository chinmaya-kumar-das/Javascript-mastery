//For Each
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function square(element, index, array) {
    array[index] = element * element;
}
a.forEach(square);
console.log(a);

//Map
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction1);

function myFunction1(value) {
  return value * 2;
}
console.log(numbers2);

//Filter
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction2);

function myFunction2(value, index, array) {
  return value > 18;
}
console.log(over18);

//reduce
const numbers3 = [45, 4, 9, 16, 25];
let sum = numbers3.reduce(myFunction3);

function myFunction3(total, value, index, array) {
  return total + value;
}
console.log(sum);
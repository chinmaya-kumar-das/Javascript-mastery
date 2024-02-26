// Implement a function that checks if a given number is even or odd.
let n=123;
if(n%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
// Write a function that returns true if a given year is a leap year, and false otherwise.

let yr=2023;
if((yr%4==0) && (yr%400==0 || yr%100!=0)){
    console.log("leapyear");
}else{
    console.log("Not leapyear");
}
// Check if two arrays are equal.
let a=[1,2,4];
let b=[1,2,4];
let equality="equal"
for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) equality="Not equal";;
  }
  console.log(equality);;
// Create a function to validate if a given string has balanced parentheses.

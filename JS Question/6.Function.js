// Write a function to add two numbers.
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 200));
// Write a function to subtract two numbers.
function sub(a, b) {
  return a - b;
}
console.log(sub(10, 200));
// Write a function to multiply two numbers.
function mul(a, b) {
  return a * b;
}
console.log(mul(10, 200));
// Write a function to divide two numbers.
function div(a, b) {
  return a / b;
}
console.log(div(10, 200));
// Write a function to find the maximum of two numbers.
{
  function max(a, b) {
    let res = a > b ? a : b;

    return res;
  }
}
console.log(max(10, 20));
// Write a function to find the minimum of two numbers.
{
  let res = false;
  function min(a, b) {
    let res = a < b ? a : b;

    return res;
  }
}
console.log(min(10, 20));
// Write a function to calculate the factorial of a number.
{
  function factorial(n) {
    let fact = 1;
    while (n > 0) {
      fact *= n;
      n--;
    }
    return fact;
  }
  console.log(factorial(5));
}
// Write a function to check if a number is even.
{
  let res = false;
  function even(a) {
    if (a % 2 == 0) {
      res = true;
    }
    return res;
  }
  console.log(even(10));
}
// Write a function to check if a number is odd.
{
  let res = true;
  function odd(a) {
    if (a % 2 == 0) {
      res = false;
    }
    return res;
  }
  console.log(odd(10));
}
// Write a function to check if a number is prime.
{
  function prime(n) {
    let count = 2;
    let result = true;
    if (n == 2 || n == 1) {
      result = false;
    }
    for (let i = 3; i < n; i++) {
      if (n % i == 0) count++;
    }
    if (count > 2) {
      result = false;
    }
    return result;
  }
  console.log(prime(11));
}
// Write a function to reverse a string.
{
  function rev(string) {
    let str = string.trim(" ");
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str.charAt(i);
    }
    return rev;
  }
  console.log(rev("chinmaya    h  "));
}
// Write a function to check if a string is a palindrome.
{
  function rev(string) {
    let str = string.trim(" ");
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str.charAt(i);
    }
    return rev;
  }
  let string = "abcdcba";
  let result = rev(string);
  if (result == string) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
// Write a function to count the occurrences of a character in a string.
function occur(str) {
    // Create an object to store character counts
    let charCount = {};
    
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is already counted
        if (charCount[char]) {
            // If yes, increment the count
            charCount[char]++;
        } else {
            // If not, initialize the count to 1
            charCount[char] = 1;
        }
    }
    
    return charCount;
}

console.log(occur("hello")); // Example usage: count occurrences of characters in "hello"

// Write a function to concatenate two strings.
{
  function concat(a, b) {
    return a + b;
  }
  console.log(concat("chinmaya", "Kumar"));
  function concats(a, b) {
    return a.concat(" " + b);
  }
  console.log(concats("chinmaya", "Kumar"));
}
// Write a function to find the length of a string.
{
  function length(s) {
    var length = 0;
    if (s == "") {
      return length;
    } else {
      for (let i = 0; s[i] != undefined; i++) {
        length++;
        if (s[i] == undefined) {
          break;
        }
      }
    }
    return length;
  }
  //s=''
  console.log(length("fede"));
}
// Write a function to convert Celsius to Fahrenheit.
{
  function c2f(cel) {
    return (9 / 5) * cel + 32;
  }
  console.log(c2f(10));
}
// Write a function to convert Fahrenheit to Celsius.
{
  function f2c(fah) {
    return (fah - 32) * (5 / 9);
  }
  console.log(f2c(50));
}
// Write a function to find the area of a circle given its radius.
{
  function area(r) {
    return (22 / 7) * r * r;
  }
  console.log(area(12));
}
// Write a function to find the perimeter of a rectangle given its length and width.
{
  function peri(l, b) {
    return 2 * (l + b);
  }
  console.log(peri(4, 5));
}
// Write a function to check if a year is a leap year.
{
  function leap(yr) {
    let ly = false;
    if ((yr % 4 == 0 && yr % 100 != 0) || yr % 400 == 0) {
      ly = true;
    }
    return ly;
  }
  console.log(leap(2024));
}
// Write a function to generate a random number within a specified range.
{
    function random(a,b){
        let range=b-a;
        let rand=Math.ceil(Math.random()*range+a);
        return rand;
    }
    console.log(random(10,20))
}
// Write a function to find the sum of all elements in an array.
// Write a function to find the average of elements in an array.
{
    function sa(arr){
        let sum=0;
        for(let val of arr){
            sum+=val;
        }
        let avg=sum/arr.length;
        let result={sum_of_array:sum,Average:avg}
        return result
    }
   console.log( sa([1,2,3,4,5,6,7]))
}
// Write a function to find the largest element in an array.
// Write a function to find the smallest element in an array.
{
    function bigsm(arr){
        let big=Math.max(...arr)
        let sm=Math.min(...arr)
        let data= {bigs:big,sms:sm}
        return data

    }
    console.log(bigsm([1,4,25,4,7,3,6,55,]))
}
// Write a function to sort elements in an array in ascending order.
// Write a function to sort elements in an array in descending order.
{
    function sorting(arr){

        let asc=arr.slice().sort((a,b)=>{return a-b})
        let desc=arr.sort((a,b)=>{return b-a})
        let array={ascending:asc,descending:desc}
        return array;
    }
    console.log(sorting([1,2,7,6,3,14,9,5,4,61]))
}
// Write a function to remove duplicates from an array.
{
  function removeDup(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          arr.splice(j, 1);
        }
      }
    }
    return arr
  }
  console.log(removeDup([1, 2, 1, 5, 1, 7, 89, 4, 7]));
}
// Write a function to reverse an array.
{
  function revArr(arr) {
    let rev = [];
    for (let i = 0; i < arr.length; i++) {
      rev.unshift(arr[i]);
    }
    return rev;
  }
  console.log(revArr([1, 2, 3, 4, 5, 6]));
}
// Write a function to merge two sorted arrays into a single sorted array.
{
  function twoSort(a, b) {
    let merge = [...a, ...b];
    let result = merge.sort((a, b) => {
      return a - b;
    });
    return result;
  }
  console.log(twoSort([1, 1, 2, 6, 7, 7, 8], [1, 2, 4, 5, 7, 9]));
}

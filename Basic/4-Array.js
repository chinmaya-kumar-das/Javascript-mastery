// Write a function to reverse the elements of an array.
{
  let array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}
// Find the maximum value in an array without using the Math.max method.
{
  let a = [170, 2, 3, 44, 5, 6, 17, 8, 9];
  let sort = a.sort((a, b) => {
    return a - b;
  });
  console.log(sort.at(a.length - 1));
}
// Find the minimum value in an array without using the Math.min method.
{
  let a = [170, 2, 3, 44, 5, 6, 17, 8, 9];
  let sort = a.sort((a, b) => {
    return b - a;
  });
  console.log(sort.at(a.length - 1));
}
// Calculate the sum of all elements in an array.
{
  let a = [170, 2, 3, 44, 5, 6, 17, 8, 9];
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(+sum);
}
// Calculate the average of all elements in an array.
{
  let a = [170, 2, 3, 44, 5, 6, 17, 8, 9];
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(+Math.round(sum / a.length));
}
// Remove duplicate elements from an array.
{
  let a = [170, 6, 3, 44, 5, 6, 17, 44, 9];

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        a.splice(j, 1);
      }
    }
  }
  console.log(a);
}
// Write a function to return an array of only the even numbers in a given array.
{
  let a = [170, 6, 3, 44, 5, 6, 17, 44, 9];

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) a.splice(i, 1);
  }
  console.log(a);
}
// Write a function to return an array of only the odd numbers in a given array.
{
  let a = [170, 6, 3, 44, 5, 6, 17, 44, 9];

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) a.splice(i, 1);
  }
  console.log(a);
}
// Square each element in an array and return a new array.
{
  let a = [170, 6, 3, 44, 5, 6, 17, 44, 9];
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push(a[i] * a[i]);
  }
  console.log(newArr);
}
// Find the index of a specific element in an array.
{
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(a.indexOf(3));
}
console.log("------------------------------------------------");
// Check if a specific element exists in an array.
{
  let a = [1, 2, 3, 5, 7, 2, 5];
  console.log(a.includes(3));
  console.log(a.includes(4));
}
// Given an array of mixed data types, filter out only the string elements.
{
  let a = [true, "chinmaya", 12, " ", 12121n, false];
  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "string") {
      newArr.push(a[i]);
    }
  }

  console.log(newArr);
}
// Modify an array by squaring each element in-place without creating a new array.
{
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < a.length; i++) {
    a[i] *= a[i];
  }
  console.log(a);
}
// Write a function to flatten a nested array.
// Rotate the elements of an array to the right by a specified number of positions.
// Find the index of the maximum value in an array.
{
  let a = [1, 2, 3, 4, 7, 5, 8, 13];
  console.log(a.indexOf(Math.min(...a)));
}
// Find the index of the minimum value in an array.
{
  let a = [1, 2, 3, 4, 7, 5, 8, 0];
  console.log(a.indexOf(Math.min(...a)));
}
// Sort an array of numbers in ascending order.
{
  let a = [7, 9, 22, 71, 45, 12, 1, 46];
  a.sort((a, b) => {
    return a - b;
  });
  console.log(a);
}
// Sort an array of strings in alphabetical order.
{
  let arr = ["x", "de", "xe", "wsws", "dws"];
  console.log(arr.sort().join(" "));
}
// Filter out the unique values from an array.
{
  let x = [1, 2, 3, 4, 5, 6, 3, 2, 3, 2, 1, 7, 9, 3, 0];
  let unique = [...new Set(x)];
  console.log(unique);
}
console.log("----------------------");

// Find the common elements between two arrays.
{
  let a = [1, 2, 3, 4, 5, 6, 7];
  let b = [4, 5, 6, 7, 8, 9, 21];
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    // for(let j=0;j<b.length;j++){
    //   if(a[i]==b[j]){
    //     newArr.push(a[i]);
    //   }
    // }
    if (b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  console.log(newArr);
}
// Remove falsy values (false, null, 0, "", undefined, NaN) from an array.
{
  let a = [1, 2, false, 0, "", NaN, undefined, null];
  for (let i = 0; i < a.length; i++) {
    if (a.includes(0, "", false, NaN, null)) {
      a.pop(a[i]);
    }
  }
  console.log(a);
}
// Write a function to partition an array into two arrays - one with even and one with odd numbers.
{
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let even = [],
    odd = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      even.push(a[i]);
    } else {
      odd.push(a[i]);
    }
  }
  console.log(even, odd);
}
// Count the occurrences of each element in an array and return an object.
{
}
// Implement a function to zip two arrays.
{
  let a = [1, 2, 3, 4];
  let b = [5, 6, 7, 8, 9];
  let c = [...a, ...b];
  let zip = [];
  for (let i = 0; i < a.length; i++) {
    zip.push([a[i], b[i]]);
  }
  console.log("Zip--------" + zip);
}
// Shuffle the elements of an array randomly.
// Find the union of two arrays (unique elements from both arrays).
{
  let a = [1, 2, 3, 4, 5, 6, 7];
  let b = [4, 5, 6, 7, 8, 9, 21];
  let newArr = [...a];
  for (let i = 0; i < a.length; i++) {
    if (!newArr.includes(b[i])) {
      newArr.push(b[i]);
    }
  }
  console.log(newArr);
}
// Use the map function to multiply each element in an array by a given factor.
{
  let a = [1, 2, 3, 4, 5, 6, 7];
  let f = 3;
  let x = a.map((i) => {
    return i * f;
  });
  console.log(x);
}
// Check if an array is a palindrome (reads the same backward as forward).
{
  let arr = ["i", "a", "a", "b", "g"];
  let newstr = ["r", "a", "c", "e", "a", "c", "a", "r"];
}
// Given an array of strings, group the anagrams together.
console.log("--------------------------------------------------");
// Find the longest word in an array of strings.
{
  let word = [
    "chinmay",
    "aju",
    "sddwws ",
    "d",
    "ajayasaha ",
    "chinmayakumar",
    "tannmaykumar ",
  ];
  let maxWord = "";
  let x = new Array();
  for (let i = 0; i < word.length; i++) {
    if (word[i].trim().length > maxWord.length) maxWord = word[i];
  }

  console.log(
    " longest word is ----" +
      maxWord +
      ", found at index " +
      word.indexOf(maxWord)
  );
}

// Given a matrix, find the sum of its diagonals.
// Transpose a given matrix.
// Rotate a given matrix 90 degrees clockwise.
// Count the number of vowels in an array of strings.'
{
  let arr = ["a", "e", "c", "s", "q", "U", "e", "n", "O"];
  let count = 0;
  for (let key = 0; key < arr.length; key++) {
    if (
      arr[key] == "A" ||
      arr[key] == "I" ||
      arr[key] == "E" ||
      arr[key] == "O" ||
      (arr[key] == "U") | (arr[key] == "a") ||
      arr[key] == "e" ||
      arr[key] == "o" ||
      arr[key] == "i" ||
      arr[key] == "u"
    )
      count++;
  }
  console.log("Vowels in the array is " + count);
}
// Remove elements at even indices from an array.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let key = 0; key < arr.length; key++) {
    if (arr[key] % 2 == 0) arr.splice(key, 1);
  }
  console.log("odd array is " + arr);
}
// Reverse the order of words in a sentence.
{
  let word = ["i", "am", "chinmaya", "kumar", "das"];
  let x = word.reverse();
  console.log(x);
}

// Implement a binary search algorithm in a sorted array.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(arr.indexOf(4));
}
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
// Given an array, move all zeros to the end while maintaining the order of non-zero elements.
// Count the number of inversions in an array.
// Find the contiguous subarray with the largest sum.
// Given an array, return an array output such that output[i] is equal to the product of all the elements of the array except self.
// Find the kth largest element in an unsorted array.
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Find the length of the longest increasing subsequence of a given array of integers.
// Find the contiguous subarray within an array containing at least one number that has the largest product.

// "Doubt" Split an array into chunks of a specific size.---------------------------------------------------------------------------------->
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12, 13, 14, 15];
  // let arr1 = [];
  // for (let i = 0; i < 10; i++) {
  //   arr1.push([i]);
  // }
  // console.log(arr1);
  let chunksLength = 3;
  let chunksArr = [];
  for (let i = 0; i < arr.length; i += chunksLength) {
        chunksArr.push(arr.slice(i, i + chunksLength));
        
  }
  console.log(" Chunks Array is " + chunksArr);
  console.log(chunksArr[0]);
  console.log(chunksArr[1]);
  console.log(typeof chunksArr);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12, 13, 14, 15];
let chunksLength = 3;
let chunksArr = new Array();

for (let i = 0; i < arr.length; i += chunksLength) {
  chunksArr.push(arr.slice(i, i + chunksLength));
}

console.log("Chunks Array is", chunksArr);
///important
let mixedQuotes3 = 'This is a string with \'single quotes\' and "double quotes" inside.';
console.log(mixedQuotes3);
let a='xvsgvxsg\'sxsx\'sxsxsx'
console.log(a);
{let a="xvsgvxsg\"sxsx\'sxsxsx"
console.log(a);}
{
  let arr=["chinmaya","kumar","das",'is a']
  arr.push("'das'")
  arr.push('"ddas"')
  arr.push('xvsgvxsg\'sxsx\'sxsxsx')
  arr.push("xvsgvxsg\'sxsx\"sxsxsx")
  console.log(arr);
}

// Create an array with five elements and print each element.
{
  let arr = [1, 2, 3, 4, 5, 6, 8, 7];
  let array = new Array(1, 2, 3, 4, 5, 6);
  console.log(array);
}
// Declare an empty array and add five elements to it using push().
{
  let arr = [];
  console.log(arr);
  arr.push(1, 2, 3, 4, 5, 9);
  console.log(arr);
}
// Declare an array of numbers and find the sum of all elements.
{
  let sum = 0;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let val of arr) {
    sum += val;
  }
  console.log(sum);
}
// Declare an array of strings and print the length of each string.
{
  let arr = ["i", "a", "chinmaya", "das"];
  for (let val of arr) {
    console.log(val.length);
  }
}
// Create an array of numbers and find the largest number in the array.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let max = Number.MIN_VALUE;
  for (let val of arr) {
    if (val > max) max = val;
  }
  console.log("max is " + max);
}
// Declare an array and reverse its elements.
{
  let arr = [1, 2, "x", "sxd", "ddd"];
  console.log(arr.reverse());
}
// Create an array of numbers and find the average of all elements.
{
  let sum = 0;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let val of arr) {
    sum += val;
  }
  console.log(sum / arr.length);
}
// Declare two arrays and concatenate them.
{
  let a = [1, 2, 3, 4];
  let b = [5, 2, 3, 4];
  console.log([...a, ...b]);
  console.log(a.concat(b));
}
// Create an array of numbers and remove the duplicates.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 123];
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newarr.includes(arr[i])) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
}
// Declare an array of numbers and sort them in ascending order.
{
  let arr = [12, 2, 3, 4, 5, 6, 7, 2, 12, 33, 1, 23];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let min = Number.MAX_VALUE;
    if (arr[i] < min) {
      min = arr[i];
    }
    newArr.push(min);
  }
  console.log(newArr);
}
// Declare an array of numbers and sort them in descending order.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 2, 12, 33, 1, 23];
  console.log(
    arr.sort((a, b) => {
      return b - a;
    })
  );
}
// Create an array of numbers and find the index of a specific number.
{
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(a.indexOf(3));
  console.log(a.indexOf(33));
}
// Declare an array of strings and convert it into a single string.
{
  let s = ["i", "am", "chinmaya"];
  console.log(s.join(" "));
  console.log(s.toString().replaceAll(",", " "));
}
// Create an array of numbers and find the smallest number and its index.
{
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < a.length; i++) {
    console.log();
  }
}
// Declare an array of numbers and remove all even numbers from it.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr.splice(i, 1);
    }
  }
  console.log("odd array is" + arr);
}
// Create two arrays of equal length and merge them alternately.
{
  let a = [1, 2, 3];
  let b = [4, 5, 6];
  console.log(...b,...a)
}
// Declare an array of objects with each object having 'name' and 'age' properties, then find the oldest person.
{
  let arr=[
    {
      name:"chinmaya",
      age:23
    },
    {
      name:"ajay",
      age:25
    }
  ]
  let maxAge=0;
  let name="";
  for(let i=0;i<arr.length;i++){
     if(maxAge<arr[i].age)
  {   maxAge=arr[i].age;
  name=arr[i].name
  }
    console.log("old person is "+name)
  }
  
}
// Create an array of numbers and check if it contains a specific number.
{
  let a = [1, 2, 3, 5, 11, 45, 1, 25, 63];
  console.log(a.includes(11));
}
// Declare an array of numbers and calculate the product of all elements.
{
  let a = [1, 2, 3, 5, 11, 45, 1, 25, 63];
  let product = 1;
  for (let i = 0; i < a.length; i++) {
    product *= a[i];
  }
  console.log(product);
}
// Create an array of strings and convert each string to uppercase.
{
  let str=['i','am','a','bad','student']
  for (const key in str) {
    let v=str[key].toUpperCase();
    str.splice(key,1,v)
  }
  console.log(str)
}
// Declare an array of numbers and find the median value.
{
  let arr = [1, 2, 3, 5, 11, 45, 1, 25, 63];
  let n = arr.length;
  let newArr = arr.sort((a, b) => {
    return a - b;
  });

  if (n % 2 == 0) {
    console.log((newArr[n / 2] + newArr[n / 2 - 1]) / 2);
  } else {
    console.log(newArr[(n/ 2).toFixed(0)]);
  }
}
// Create an array of numbers and rotate it to the right by one position.
{
 // Original array
let originalArray = [1, 2, 3, 4, 5];

// Rotate the array to the right by one position
let rotatedArray = [originalArray[originalArray.length - 1], ...originalArray.slice(0, originalArray.length - 1)];

console.log("Rotated array:", rotatedArray);

}
// Declare an array of numbers and find the second largest number.
{
  let arr=[1,2,3,4,5,6,7,10,9,8]
  let a=arr.sort((a,b)=>{return a-b})
  console.log(arr[arr.length-2])
}
// Create an array of strings and sort them alphabetically.
{
  let arr=['d','a','c','n','b','f']
  console.log(arr.sort())
}
// Declare an array of numbers and split it into two arrays of even and odd numbers.
{
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
let oddNumbers = [];

for (let number of numbersArray) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number); 
    }
}

console.log("Original array:", numbersArray);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);

}
// Create an array of strings and find the longest string.
{
  let str=["dc","dcd","dcededed","dcd","edeed"]
  let len='';
  for(let val of str){
    if(val.length>len.length){
      len=val;
    }
  }
  console.log("biggest string  i s"+len)
}
// Declare an array of numbers and find the difference between the largest and smallest numbers.
{
  let arr = [1, 2, 3, 5, 11, 45, 1, 25, 63];
  let newarr=arr.sort((a,b)=>{return a-b})
  console.log(newarr[arr.length-1]-newarr[0])
}
// Create an array of numbers and find the frequency of each element.
{
  let arr = [1, 2, 3, 4, 5, 3, 3, 5, 6, 7];
  let frequency = {};
  
  for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
  }
  
  for (let key in frequency) {
      console.log(key + " occurs " + frequency[key] + " times");
  }
  
}
// Declare an array of strings and remove all strings with a length less than 3.
{
  let str=["dc","dcd","dcededed","dcde","edeed",'a']
 
  for(let key in str){
    if(str[key].length<3){
      str.splice(key,1)
    }
  }
  console.log("biggest string  i s"+str)
}
// Create an array of numbers and find the mode (the number that appears most frequently).
{
  let arr=[1,2,3,4,5,3,3,5,6,7]
  let mode=0;
  for(let i=0;i<arr.length;i++){
    let maxcount=0;
    let val=arr[i]
    let occur=0;
    for(let j=i+1;j<arr.length;j++){
        if(val==arr[j]){
          occur++;
        }
    }
  }
  console.log("Mode is "+mode)
}
// Array all methods
{
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let b = ["A0", "d", "ws", ["d", "ed", "ed"]];
  console.log("Basic array questions-----------");
  // console.log(a.length)
  // console.log(a.at(2))
  // console.log(a[1])
  // console.log(a.push(2))
  // console.log(a.pop(5))
  // console.log(a)
  // console.log(a.splice(0,0,2,3,12))
  // console.log(a)
  // console.log(a.splice(0,2))
  // console.log(a.unshift(1.1))
  // console.log(a.shift("g"))
  //search
  // console.log(a.indexOf(5))
  // console.log(a.lastIndexOf(5))
  // console.log(a.includes("g"))
  // console.log(a.toString())
  // console.log(a.join("-"))
  // console.log(a.find(x=>x%2==5))
  // console.log(a.findIndex(x=>x>4))
  // console.log(a.sort((a,b)=>{return a-b}))
  // console.log(a.sort((a,b)=>{return b-a}))
  // console.log(a.reverse())
  // console.log(a.toSorted())
  // console.log(a.toReversed())
  // console.log(a.slice(2))
  // console.log(a.concat(a))
  // console.log([...a,...a,...a])
  // console.log(b.flat())
  // console.log(a.copyWithin(2,0))
  // console.log(delete a[0])
  // console.log(a)
}

{let arr=[1,2,3]
console.log(typeof arr)

let array=new Array(1,2,3,4,5);
console.log(array)
console.log(typeof array)

let ar=new Array()
ar[0]=3;
ar[1]=30;
console.log(ar)}

{
  //iteration
  let arr=[1,2,3,4,5,6,7,8,9]
  for(let key in arr)
  {
    // console.log(arr[key])
  }
  for(let val of arr){
    // console.log(val)
  }
  let map=arr.map((val,index,arr)=>{
    return val*=2;
  })
  console.log(map)
  let fil=arr.filter((val,index,arr)=>{
    return val%2==0;
  })
  console.log(fil)
  let red=arr.reduce((tot,val)=>{
    return tot+val;
  })
  console.log(red)
}
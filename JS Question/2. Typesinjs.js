// Declare a variable num and assign an integer value to it.
{
  let num = 10;
}
// Declare a variable floatNum and assign a floating-point value to it.
{
  let floatNum = 10.36;
  console.log(floatNum);
}
// Declare a variable str and assign a string value to it.
{
  let str = "chinmaya";
}
// Declare a variable bool and assign a boolean value to it.
let voted = false;
// Declare a variable arr and assign an array containing numbers to it.
let nums = [1, 2, 3, 4, 5];
let num1 = new Array(1, 2, 3, 4, 5, 6, 76, 7, 8, 2);
console.log(num1);
console.log(nums);
// Declare a variable obj and assign an object containing key-value pairs to it.

let obj = {
  name: "chinmaya",
  age: 22,
};
console.log(obj);

// Declare a variable isNull and assign a null value to it.
{
  let isNull = null;
  console.log(typeof isNull);
}
// Declare a variable undef without assigning any value to it.
{
  let undef;
  console.log(undef);
}
// Check the type of the variable num.
console.log(typeof 100);
// Check the type of the variable floatNum.
console.log(typeof 36.1);
// Check the type of the variable str.
console.log(typeof "chinmaya");
// Check the type of the variable bool.
console.log(typeof true);
// Check the type of the variable arr.
console.log(typeof [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Check the type of the variable obj.
console.log(typeof { a: "10", b: 22 });
// Check the type of the variable isNull.
let a = null;
console.log(typeof a);
// Check the type of the variable undef.
let x;
console.log(typeof x);
// Convert the variable num to a string.
let num = 123;
console.log(typeof num.toString());
// Convert the variable str to a number.
let str = "123";
console.log(parseInt(str));
console.log(Number(123));

// Convert the variable bool to a string.
let bool = true;
console.log(bool);
console.log(bool.toString());
// Convert the variable arr to a string.
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.toString());
console.log(arr.join(""));
// Convert the variable obj to a string.
{
  
    var object = { name: "John", age: 30, city: "New York" };

var strs = object.toString();

console.log(strs);

}
// Convert the variable isNull to a boolean.
{
    let isNull=null;
    let bool=!!isNull
    console.log(bool)
    var booleanValue = Boolean(isNull);
    console.log(booleanValue)
}
// Convert the variable undef to a boolean.
{
    let x;
    let bool=Boolean(x)
    console.log(bool)
}
// Perform addition on num and floatNum.
{
  let num =123;
  let floatNum = 143.56;
  console.log(num+floatNum);
  
}
// Perform concatenation on str and num.
let string = "chinmay";
let number = 143;
console.log(string + number);
console.log(string.concat(143));
// Perform a logical operation between bool and bool.
{
    let a=true;
    let b=false;
    console.log("logical opertion on boolean value is      "+ (a+b))
}
// Access an element of the array arr.
{
  let arrays = ["a", "b", "c", "3"];

  console.log(arr[3]);
}
// Access a property of the object obj.
console.log(obj.name);
console.log(obj.age);
// Assign a new value to isNull.
let x1 = "";
console.log(x1);
x1 = "thi s is x1";
console.log(x1);
// Check if undef is undefined.
{
  let undef = 4;
  if (typeof undef == typeof undefined) {
    console.log("undefined");
  } else {
    console.log("defined");
  }
}


//Symbol datatype
let name="chinmaya"
let names=Symbol("chinmay")

console.log(name===names)
console.log(name==names)
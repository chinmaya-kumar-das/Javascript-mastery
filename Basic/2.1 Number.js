console.log(4+NaN);
console.log(NaN+7);

console.log(123-"123");
console.log(123+"123");
console.log(123*"123");
console.log(123/"123");

let x=1111111111111111111111111111111111211111111111131111111111111141111111114;
console.log(x);
//big int
let y=111111111111111111111111111111111121111111111113111111111111111111111111111111111111111111111111111111111111111141111111114n;
console.log(y);

//methods in number
let number=1234;
let n=4
console.log(number);
console.log(number.toFixed(2)); console.log(number.toFixed(4));

console.log(number.toString());console.log(typeof number.toString());

console.log(number.valueOf());
console.log(n.toExponential(2));

console.log(number.toPrecision(2));//return as a string 
console.log(typeof number.toPrecision(2));

//convert anything to number
let num=44543;
console.log(num);
console.log(Number(num));
console.log(Number(true));
console.log(Number(false));
console.log(Number("A"));
console.log(Number("a"));
//convert anything to sting
x=23;
y="happy"
c="A"
console.log(parseInt("-10"));

console.log(parseInt("-10.100"));
console.log(typeof parseInt("-10.100"));
console.log(parseFloat("10"));
console.log( typeof parseFloat("-10.100"));

console.log(Number.isInteger(x));
console.log(Number.isInteger(c));

// anything to number properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.EPSILON);
console.log(Number.NaN);
console.log(typeof Infinity);
console.log( -Infinity);
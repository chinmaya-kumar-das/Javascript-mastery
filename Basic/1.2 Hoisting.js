//we can access the value before declaration
//it take all declaration into top of the scope
//ony VAR is support hoisting
//we can both decl and initialization same time but can not only intialize
x=20
console.log(x);
var x;

y=20
console.log(y);
var y=12;

//z=20
console.log(z);
var z=12;

z=20
console.log(z);
var z=12;

a=11;
console.log(a);
let a;//it show error

b=11;
console.log(b);
const b=7;//it show error

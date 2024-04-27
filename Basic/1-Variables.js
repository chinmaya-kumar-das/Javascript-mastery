//simple
// let a=10
// var b=20
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);

//scope
let a=10
console.log("outside a is global "+a);
{
   let a=23;//or a=23 
    console.log("inside block scope is local "+a);
}

var b=20
console.log(b);{
    console.log(" only var block call "+b);
}
{
    var b=123
    console.log("var call with new declaration "+b);
}
const c=30;
 {
    const c=223;
    console.log(c);
}
// c=3;--redeclaration or initialization not possible
console.log(c);

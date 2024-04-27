// let a=5;
// let b=2;

// let str="44"
// console.log(str+22);
// console.log(parseInt(str)+22);
// console.log(parseFloat(str));
// console.log( typeof(parseFloat(str)+22));
// console.log(a.toFixed(2));
// console.log(Number(str));
// console.log(a.toString());
// console.log(true.toString());
// console.log(true.toString());

let a=10;

console.log(typeof x);
console.log(typeof 2);
console.log(typeof true);
console.log(typeof false);
console.log(typeof "chinmay");
console.log(typeof Symbol("chinamma"));
console.log(typeof " ");
console.log(typeof "NaN"+"nan");
console.log(typeof 2+89);
console.log(typeof true+false);

//function
let functions=function sum(a,b){
    return a+b;
}
// console.log(sum(7,8));
 console.log(functions(15,7));
 let car={
    model:"Maruti",
    price:1200000,
    seat:4,
    details:function(){
        return this.model+" "+this.price+" "+this.seat;
    }
 }
 console.log(car);
 console.log(car.model);
 console.log(car["model"]);
 console.log(car["price"]);

 console.log(car.details());
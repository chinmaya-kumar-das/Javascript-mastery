// Object Creation and Properties:
//way 1 object literals

// let data={
//     name:"chinmaya",
//     age:22,
//     sal:12000,
//     print:function hello(){
//         console.log("Hello function printed")
//     }
// }


// console.log(data)
// console.log(data.name)
// console.log(data[0])
// console.log(data.print())
// console.log(Object.values(data))
//way2 object .create


//way3 constructor function
let name=new Object()

name.fname="chinmaya"
name.lname="das"
console.log(name)


console.log("---------------------")
//way 5 class method
class bank{
    constructor(an,bal,name){
        this.an=an;
        this.bal=bal;
        this.name=name;
    }
}
var bank1=new bank(1001,12000,"chinmaya")
// console.log(bank1)
// delete bank1.bal

// console.log(bank1)

console.log(bank1['name'])
console.log(bank1['bal'])

//way 4
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "Indian hai bhai";
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };
  let p1=new Person("chinmaya","kumar",23,"black")

  console.log(p1.nationality)
  console.log(p1.name())
//prototypes



//object clone
let data={
    name:"chinmaya",
    age:223,
    sal:12000,
    print:function hello(){
        console.log("Hello function printed")
    }
}
let data2={
    name:"chinmaya",
    age:22,
    sal:12000,
    prints:function hello(){
        console.log("Hello function printed")
    }
}

let datas={...data,...data2}
console.log(datas)
//If you have an object, you can’t just iterate it using map(), forEach() or a for..of loop.
for(let val in data){
    console.log(val)
    console.log(data[val])
}

console.log(Object.values(datas))
console.log(Object.keys(datas))
delete datas.age;
console.log(datas)

console.log(Object.values(datas))
console.log(Object.keys(datas))
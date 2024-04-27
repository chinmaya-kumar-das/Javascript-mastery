let sets=new Set([1,2,3,4,5,6])
sets.add(99)
sets.delete(1)
console.log(sets)

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits.get('apples'))

let x={
    a:2,
    d:4,
}
console.log(Object.values(x).length
)

let c={
  x:3,
  y:'hii'
}
let d={...c}
let e=c
console.log(d)
c.x='changed'
console.log(e)
for(let key in c){
  console.log(c[key])
}
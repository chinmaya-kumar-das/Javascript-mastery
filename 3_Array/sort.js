let a=[2,44,1,6,3,23,5,9,13,0]
console.log(a.sort((a,b)=>{return a-b}));
console.log(a.sort((a,b)=>{return b-a}));

let char=["o","d","a","z","c"]
console.log(char.sort());
console.log(char.reverse());

let months = ["Jan", "Feb", "Mar", "Apr"];
let sorted = months.toSorted();
console.log(sorted);
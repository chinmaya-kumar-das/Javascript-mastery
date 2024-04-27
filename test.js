// let arr=[1,2,3,4,5,6,7,8,9,10]

// // let x=arr.filter((a)=>{
// //     return a%2==0
// // })
// // for(let i=0;i<x.length;i++){
// //     x[i]=x[i]**2
// // }

// //using new array method
// let newArr=[]
// for(let val of arr){
//     if(val%2==0){
//         newArr[newArr.length++]=val**2
//     }
// }
// console.log(newArr)

// //way2
// let arr2=[...arr]
// // let x=arr2.forEach()
// console.log()

//task 23 april

let n=4;
let tri="";
//for row
for(let i=1;i<=n;i++){

    //space
    for(let j=1;j<=n-i;i++){
        tri.concat("\t");
    }
    //star
    for(let k=1;k<=2*i-1;k++){
        tri.concat("*");
    }
    //space
    for(let l=1;l<=n-i;l++){
        tri.concat("\t");
    }
    tri.concat("\n");
}

console.log(tri)
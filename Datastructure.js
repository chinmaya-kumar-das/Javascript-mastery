{// let x=[0,1,2,3,14,4,5,61,4,6,7];
// let rev=[]
// let start=0;let end=x.length-1;
// while(start<end){
//     rev.splice(end,0,x[start])
//     rev.splice(start,0,x[end])
//     start++;
//     end--;
// }
// console.log(rev)

}

// {//bubble sort
// let x=[4,3,1,5,10,30,6,7,111,23]
// function sorts(arr){
//     //for terms will be run
//     for(let turn=0;turn<x.length-1;turn++){
//         //for large comes to right position
//         for(let j=0;j<arr.length-1-turn;j++){
//           if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp
//           }
//         }
//     }
//     return arr;
// }

// console.log(sorts(x))}


//selection sort
let a=[3,46,8,9,0,7,99,1];

function ssort(arr){
    for(let i=0;i<arr.length-1;i++){
        let mpos=i;
        for(let j=i+1;j<arr.length-1;j++){
            if(arr[mpos]>arr[j]){
                mpos=j;
            }
        }
         //swap
         let temp=arr[mpos];
         arr[mpos]=arr[i];
         arr[i]=temp;
    }
    return arr;
}
console.log(ssort(a));
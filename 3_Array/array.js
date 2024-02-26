
//un comment to execute

//1
{// Write a function to reverse the elements of an array.
let arr=[2,43,54,3,1,6,7]
let rev=arr.reverse()
console.log(rev);
// Find the maximum value in an array without using the Math.max method.
let arr2=[2,43,54,3,1,6,7]
let narr=arr2.sort((a,b)=>{
    return a-b;
})
console.log(narr[narr.length-1]);
// Find the minimum value in an array without using the Math.min method.
let arr3=[2,43,54,3,1,6,7]

let narrmin=arr3.sort((a,b)=>{
    return a-b;
})
console.log(narrmin[0]);
// Calculate the sum of all elements in an array.
// Calculate the average of all elements in an array.
let arr5=[2,43,54,3,1,6,7]
let sum=0;
for(let i=0;i<arr5.length;i++){
    sum+=arr5[i];
}
let avg=sum/arr5.length;
console.log(avg.toFixed(0));

// Remove duplicate elements from an array.
let arr6=[2,43,54,3,1,6,7,2,5,43]
for(let i=0;i<arr6.length;i++){
    for(let j=i+1;j<arr6.length;j++){
        if(arr6[i]==arr6[j]){
            arr6.splice(j,1)
        }
    }
}
console.log(arr6);
// Write a function to return an array of only the even numbers in a given array.
let arr8=[2,43,54,3,1,6,7]
let evenArr=[];
let j=0;
for(let i=0;i<arr8.length;i++){
   if(arr8[i]%2==0)
   {evenArr[j]=arr8[i];
    j++;
    }
}
console.log(evenArr);
// Write a function to return an array of only the odd numbers in a given array.
let arr9s=[2,43,54,3,1,6,7]
let oddArr=[];
let k=0;
for(let i=0;i<arr9s.length;i++){
   if(arr9s[i]%2!=0)
   {
    oddArr[k]=arr9s[i];
    k++;
    }
}
console.log(oddArr);
// Square each element in an array and return a new array.
let arr9=[2,43,54,3,1,6,7]
let newArr=[];
for(let i=0;i<arr9.length;i++){
    newArr[i]=2*arr9[i];
}
console.log(newArr);
// Find the index of a specific element in an array
let arr10=[2,43,54,3,1,6,7,2,5,43]
console.log(arr10.indexOf(43));
console.log(arr10.lastIndexOf(43));}

console.log("---------------------------------");
//2
{
// Check if a specific element exists in an array.
let  array=[1,3,4,5,6,7,8,9,0,12]
console.log(array.includes(13));
console.log(array.includes(1));

// Given an array of mixed data types, filter out only the string elements.
let mixArr=[1,"chinmay",true," "];
let i=0;
let newarr=[];
while(i<mixArr.length){
   if(typeof mixArr[i]==="string"){
    newarr.push(mixArr[i]);
}
i++;
}
console.log(newarr);
// Modify an array by squaring each element in-place without creating a new array.

let x=[1,2,3,4,5]
for (let i = 0; i < x.length; i++) {
    x[i] = x[i] * x[i];
  }
console.log(x);
// Write a function to flatten a nested array.
let number=[[1],[12,14],[2,4,6]]
console.log(number.flat());
// Rotate the elements of an array to the right by a specified number of positions.

// Find the index of the maximum value in an array.
let arrmax = [2, 43, 54, 3, 1, 6, 7];

let narrmax2 = arrmax.slice().sort((a, b) => b-a);
let max = narrmax2[0];
console.log(arrmax.indexOf( max));

console.log("---------------------------------");
// Find the index of the minimum value in an array.
let arrmin = [2, 43, 54, 3, 1, 6, 7];

let narrmin2 = arrmin.slice().sort((a, b) => a - b);
let min = narrmin2[0];
console.log(arrmin.indexOf( min));


// Sort an array of numbers in ascending order.
let names=[4,8,2,40,1,17,12,3,7]
let s=names.sort((a,b)=>{return a-b})
console.log(s);
// Sort an array of strings in alphabetical order.
let name=["d","c","f","a","z","s"]
console.log(name.sort());
// Filter out the unique values from an array.

}

let x=[1,2,3]
x[2]=33
console.log(x);
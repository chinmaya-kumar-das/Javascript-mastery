// Find the largest element in an array of numbers.

let number=[1,2,3,4,5,6,7,8,9,4,1,11]
let greatest=Number.MIN_VALUE;
for(let i=0;i<number.length;i++){
    if(number[i]>greatest)
    greatest=number[i]
}
console.log(greatest);

// Calculate the sum of all elements in an array.
let arr=[1,4,9,30,3,4,65,4,47];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);
// Check if a number is prime.
let n=7;
let primecount=1;
for(let i=2;i<=n/2;i++){
    if(i%2==0){
        primecount++;
    }
}
if(primecount==2){
    console.log("Prime number");
}else{
    console.log("Not Prime");
}

// Convert a number to its Roman numeral representation.


// Implement a function to round a number to a specified decimal place.
let num=54.586;
let num2=Math.round(num);
console.log(num2.toFixed(2));

{
    // //number
    // console.log(Number.MAX_VALUE)
    // console.log(Number.MIN_VALUE)
    // console.log(Number(45))
    // console.log(Number.POSITIVE_INFINITY)
    // console.log(Number.NEGATIVE_INFINITY)
    // let x=new Number(12.67)
    // console.log(x)
    // console.log(x.toString())
    // console.log(x.toFixed(4))
    // console.log(x.toPrecision(2))
    // console.log(x.valueOf())
    // console.log(x.toExponential(2))
    // console.log(Number.parseInt(x))
    // console.log(Number.parseFloat(70))
    // console.log(Number.isFinite(100))
    // console.log(Number.isSafeInteger(100))
    // console.log(Number.isInteger(22/7))
}

// // Write a function to check if a number is even or odd.
// {
//     function even(num){
//         if (num%2==0){
//             return "even";
//         }else{
//             return "odd"
//     }
// }
// console.log(even(4))
// }
// // Write a function to find the factorial of a number.
// {
//     function fact(n){
//         let fact=1;
//         while(n>1){
//             fact*=n;
//             n--;
//         }
//         return fact;
//     }
//     console.log(fact(8))
// }
// // Write a function to check if a number is prime.
// {
//     function prime(n){
//         let result=0;
//         for(let i=2;i<=n;i++){
//             if(n%i==0){
//                 result="Not Prime"
//             }else{
//                 result="Prime"
//             }

//         }
//         return result;
//     }
//     console.log(prime(4))
// }
console.log("------------------------------------------")
// Write a function to generate the Fibonacci sequence up to a certain number of terms.
// {
//     let term=10;
//     let fibb=[0,1]
//         let nm1=0;
//         let nth=1;
//     for(let i=2;i<term;i++){
        
//         let fib=nm1+nth;
//         fibb.push(fib)
//         nm1=nth;
//         nth=fib;
//     }
//     console.log(fibb)
// }
// Write a function to calculate the sum of digits of a number.
// Write a function to reverse a number.
{
    
}
// Write a function to find the largest number in an array of numbers.
// Write a function to find the smallest number in an array of numbers.
// Write a function to calculate the average of numbers in an array.
// Write a function to find the median of numbers in an array.
// {
//  let arr=[1,2,3,4,5,6,7,51]   
//  let newArr=arr.sort((a,b)=>{
//     return a-b;
//  })
//  let median=0;
//   if(newArr.length%2==0){
//     median=newArr[newArr.length/2]+newArr[newArr.length/2-1]
//   }else{
//     median=newArr[newArr.length/2]
//   }
//   console.log(median)
// }

// Write a function to generate random numbers within a specified range.
// {
//     console.log(Math.round(Math.random()*100))
// }
// // Write a function to round a number to a specified number of decimal places.
// {
//     let n=12.361154
//     console.log(n.toFixed(0))
//     console.log(n.toPrecision(6))
//     console.log(n.toExponential(3))
// }

// Write a function to convert a binary number to a decimal number.
// Write a function to convert a decimal number to a binary number.
// Write a function to convert a decimal number to a hexadecimal number.
// Write a function to convert a hexadecimal number to a decimal number.
// Write a function to convert a decimal number to a Roman numeral.
// Write a function to convert a Roman numeral to a decimal number.

// Write a function to find the square root of a number.
// {
//     let num=121
//     console.log(Math.sqrt(num))
//     console.log("Sqrt is " +121**0.5)
// }
// // Write a function to find the cube root of a number.
// {
//     console.log("Sqrt is of 27 is " +Math.cbrt(27))
//     console.log("Sqrt is of 27 is " +Math.ceil(64**0.33))
// }
// // Write a function to check if a number is a perfect square.
// {
//     let n=1445;
//     console.log(Math.sqrt(n))
//     function isPerfectSquare(number) {
//         // Check if the square root of the number is an integer
//         let sqrt = Math.sqrt(number);
//         return sqrt === Math.floor(sqrt);
//     }
    
//     // Example usage:
//     let num = 16; // Change this to any number you want to check
//     console.log(num + " is a perfect square:", isPerfectSquare(num));
    
// }

// Write a function to generate Pascal's triangle up to a certain number of rows.
// Write a function to convert a number to words.
{//later will be done
}
// Write a function to convert a number from words to digits.

// Write a function to generate a list of all divisors of a number.

// Write a function to check if a number is a power of another number.

// Write a function to calculate the power of a number.
// {
//     console.log(2**3)
//     console.log(Math.pow(2,4))
// }
// // Write a function to calculate the area of a circle given its radius.
// {
//     let r=4;
//     console.log("square of circle is "+Math.PI*r*r)
// }
// // Write a function to calculate the circumference of a circle given its radius.
// {
//     let r=6;
//     console.log("circumference=" +2*r*Math.PI)
// }
// // Write a function to calculate the volume of a sphere given its radius.
// {
//    //4.PI.R^3/3
//    let r=23;
//    console.log("volume of sph "+4*Math.PI*(r**3)/3) 
// }
// // Write a function to calculate the area of a triangle given its base and height.
// {
//     let base=12;
//     let height=23
//     console.log(1/2*base*height)
// }
// // Write a function to calculate the perimeter of a triangle given its three sides.
// {
//     let a=4;
//     let b=3;
//     let c=6;
//     console.log(a+b+c)
// }
// // Write a function to calculate the area of a rectangle given its length and width.
// {
//     let l=4,b=3
//     console.log("area of rectangle is l*b="+l*b+" cm^2")
// }
// // Write a function to calculate the perimeter of a rectangle given its length and width.
// {
//     let l=4,b=3
//     console.log("perimeter of rectangle is l*b="+2*(l+b)+" cm")   
// }
// // Write a function to calculate the area of a square given its side length.
// {
//     let side=12;
//     console.log("Area="+side**2)
// }
// // Write a function to calculate the perimeter of a square given its side length.
// {
//     let side=12;
//     console.log("Perimeter="+side*4)
// }
// // Write a function to convert degrees to radians.
// {
//     function dtor(deg){
//         return Math.PI*deg/180
//     }
//     console.log(dtor(90))
// }
// // Write a function to convert radians to degrees.
// {
//     function rtod(rad){
//         return rad*180/Math.PI
//     }
//     console.log(rtod(1.5707963267948966))
// }
// // Write a function to calculate the factorial of a large number using BigInt.
// {
//     let num = 561644654654644664444446546449446n;

// function factorial(n) {
//     let result = 1n;
//     for (let i = 2n; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// let fact = factorial(num);
// console.log(fact.toString());

// }

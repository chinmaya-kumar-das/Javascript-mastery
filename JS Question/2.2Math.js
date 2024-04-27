//Math all functions

// {
//     console.log(Math.PI)
//     console.log(Math.max(10,12,13,122,23))
//     console.log(Math.min(1,-2,8,56,8))
//     console.log(Math.round(4.3))
//     console.log(Math.round(4.9))
//     console.log(Math.floor(4.89))
//     console.log(Math.ceil(4.8))
//     console.log(Math.abs(-52.01))
//     console.log(Math.random()*10)
//     console.log(Math.random()*100)
//     console.log(Math.random()*1000)
//     console.log(Math.sin(0))
//     console.log(Math.cos(0))
//     console.log(Math.sqrt(121))
//     console.log(Math.cbrt(16))
//     console.log(Math.sign(-5))
  
// }

// Write a function to calculate the square root of a number.
{
    console.log(Math.sqrt(900))
    function sqrt(num){
        console.log(num**0.5)
    }
    sqrt(64)
    
}
// Create a function to find the minimum value in an array of numbers.
{
    let arr=[1,2,3,4,5]
    console.log()
    function max(arr){
        let max=Number.MIN_VALUE;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max)
            max=arr[i]
        }
        return max;
    }
    console.log(max(arr))
}
// Implement a function to find the maximum value in an array of numbers.
{
    let arr=[1,2,3,4,5,-2]
    function minimum(arr){
        let min=Number.MAX_VALUE;
        for(let i=0;i<arr.length;i++){
            if(arr[i]<min)
            min=arr[i]
        }
        return min;
    }
    console.log(minimum(arr))
}
// Write a program to calculate the factorial of a number.
{
    let n=5;
    let fact=1;
    while(n>0){
        fact=fact*n;
        n--;
    }
    console.log(fact)
}
// Create a function to generate a random number between a specified range.
{
    console.log(Math.random())
    console.log(Math.random()*10)

}
// Implement a function to round a number to a specified number of decimal places.
{
    let n=10.200
    console.log(n.toPrecision(3))
}
// Write a program to calculate the absolute value of a number.
console.log(Math.abs(-8))
// Create a function to calculate the sine of an angle in degrees.
{console.log(Math.sin(0))
console.log(Math.sin(90))
console.log(Math.sin(360))}
// Implement a function to calculate the cosine of an angle in degrees.
{
    console.log(Math.cos(0))
console.log(Math.cos(90))
console.log(Math.cos(360))
}

// Create a function to convert degrees to radians.
{
    let deg=90
    console.log("radian is "+ Math.PI*deg/180)
}
// Implement a function to convert radians to degrees.
{
    let radian= 1.5707963267948966
    console.log("deg is "+ (radian*180)/Math.PI)
}
// Write a program to calculate the natural logarithm (base e) of a number.
{

}
// Create a function to calculate the logarithm of a number with a specified base.
// Implement a function to calculate the exponentiation of a number.
{
    console.log(2**4)
}
// Write a program to calculate the hypotenuse of a right triangle given its two sides.
{
    let p=24;
    let b=43;
    let h=Math.sqrt((p**2)+(b**2))
    console.log("hypotenious is "+Math.round(h))
}
// Create a function to calculate the arc sine of a number.
{
    console.log(Math.sign(-8))
    console.log(Math.sign(8))
    console.log(Math.sign(0))
}
// Create a function to calculate the greatest common divisor (GCD) of two numbers.
// Implement a function to calculate the least common multiple (LCM) of two numbers.
{
    // Function to find the Greatest Common Divisor (GCD) of two numbers
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to find the Least Common Multiple (LCM) of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Example usage:
let num1 = 12;
let num2 = 18;

console.log(`GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`);
console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);

}
// Write a program to calculate the square of a number.
console.log(4**2)
// Create a function to calculate the cube of a number.
console.log(4**3)

// Create a function to calculate the permutation of two numbers.
{
    //n!/(n-r)!
    
}
// Create a function to calculate the factorial of a large number using BigInt.
{
    function factorial(num) {
        if (num < 0) {
            return BigInt(-1); // Factorial of a negative number is undefined
        } else if (num === 0 || num === 1) {
            return BigInt(1); // Factorial of 0 and 1 is 1
        } else {
            let result = BigInt(1);
            for (let i = BigInt(2); i <= num; i++) {
                result *= i;
            }
            return result;
        }
    }
    
    // Example usage:
    let number = BigInt(100); // Using BigInt for large numbers
    console.log(`Factorial of ${number} is ${factorial(number)}`);
    
}
// Implement a function to calculate the cube root of a number.
{
    let n=27
    console.log("cube root is "+Math.cbrt(n))
}
// Write a program to calculate the area of a circle given its radius.
{
    let r=5;
    console.log(Math.PI*r**2)
}
// Create a function to calculate the circumference of a circle given its radius.
{
    let r=3
    console.log("circumference="+2*Math.Pi*r)
}
// Implement a function to calculate the volume of a sphere given its radius.
{
 // V = 4/3 π r³
 let r=4;
 console.log(4/3*Math.PI*r**3)   
}
// Write a program to calculate the area of a triangle given its base and height.
{
    let b=23;
    let h=5
    console.log("Area of triangle is "+1/2*b*h)
}
// Create a function to calculate the perimeter of a rectangle given its length and width.
{
    //P=2(l+w)
    let l=12
    let w=7
    console.log(2*(l+w))
}
// Implement a function to calculate the volume of a cylinder given its radius and height.
{
    //V=πr2h
    let r=3;
    let h=6;
    console.log(Math.PI*r**2*h)
}
// Write a program to calculate the surface area of a cube given its side length.
{
    //A=6a2
    let side=10
    console.log(6*side**2)
}
// Create a function to calculate the volume of a cone given its radius and height.
{
//    V=πr2h/3
let r=3;
let h=12
console.log("Vol of cone "+Math.PI*(r**2)*h/3)

}
// Implement a function to calculate the surface area of a sphere given its radius.
{
    //A=4πr2
    let r=12;
    let sArea=4*Math.PI*(r**2)
    console.log("Sur Area of Spher "+sArea)
}
// Write a program to calculate the volume of a tetrahedron given its side length.
{
    let a=15;
    let vol=a**3/6*1.414
    console.log(vol)
}
// Create a function to calculate the surface area of a cylinder given its radius and height.
{
    let r=5;
    let h=10;
    let SurArea=2*Math.PI*r*(h+r)
    console.log("Surface area of cylinder "+SurArea)
}
// Implement a function to calculate the surface area of a cone given its radius and slant height.
{
   //Surface area of cone = πr(r+√(h2+r2))
   let r=4;
   let h=7;
   let SurArea=Math.PI*r*(r+Math.sqrt(h**2+r**2))
   console.log(SurArea)
}
// Write a program to calculate the volume of a pyramid given its base area and height.
{
    let baseArea=12;
    let height=10
    let vol=1/3*baseArea*height;
    console.log(vol)
}
// Create a function to calculate the surface area of a tetrahedron given its side length.
{
    let edge=4;
    let surfaceArea=1.732*(edge**3)
    console.log("surfaceArea " +surfaceArea)
}
// // Write a program to print numbers from 1 to 10 using a for loop.
// {for(let i=1;i<=11;i++){
// //    console.log(i+" ")
// }}
// // Write a program to print even numbers between 1 to 20 using a for loop.
// {
//     for(let i=1;i<=20;i++){
//         if(i%2==0)
//         {// console.log(i)
//         }
//     }
// }
// // Write a program to calculate the factorial of a number using a while loop.
// {
//     let n=10;
//     let fact=1;
//     while(n>1){
//         fact*=n;
//         n--;
//     }
//     console.log(fact)
// }
// // Write a program to find the sum of natural numbers up to 100 using a for loop.
// {
//     let sum=0;
//     for (let index = 0; index <=100; index++) {
//         sum+=index;
        
//     }
//     console.log(sum)
// }
// // Write a program to print the multiplication table of a number using a for loop.
// {
//     let num=5;
//     for (let index = 1; index <= 10; index++) {
//         console.log(num+"*"+index+"="+index*num)
        
//     }
// }
// // Write a program to find the greatest common divisor (GCD) of two numbers using a while loop.
// {
//     let n=12
//     let m=23;
// }
// // Write a program to check if a given number is prime or not using a for loop.
// {
//     let n=10130;
//     var prime=true;
//     var countfact=2;
//     for(let i=2;i<n;i++){
//         if(n%i==0)
//         prime=false
//     }
//     console.log(prime)
// }
// // Write a program to find the sum of digits of a number using a while loop.
// {
//     let n=54554646464;
//     var sum=0;
//     while(n>0){
//         let r=n%10;
//         sum+=r;
//         n=Math.floor(n/10)
//     }
//     console.log(sum)
// }
// // Write a program to reverse a given number using a while loop.
// {
//     let n=123;
//     var rev=0;
//     while(n>0){
//         let r=n%10;
//         rev=rev*10+r;
//         n=Math.floor(n/10);
//     }
//     console.log(rev)
// }
// // Write a program to generate the Fibonacci series up to a given number using a for loop.
// {
//     let len=10;
//     let nm1=0;
//     let np1=1
//     for(let i=0;i<len-2;i++){
//     if(nm1==0 && np1==1){
//         console.log(0)
//         console.log(1)
//     }
     
//      let fib=nm1+np1;
//      console.log(fib)
//      nm1=np1;
//      np1=fib;

//     }
// }
// // Write a program to find the factorial of a number using a for loop.
// {
//     let n=10;
//     let fact=1;
//     for(let i=2;i<=n;i++){
//         fact*=i;
        
//     }
//     console.log(fact)
// }
// // Write a program to check if a given number is a palindrome using a while loop.
// {
//     let n=12321;
//     let org=n;
//     var rev=0;
//     while(n>0){
//         let r=n%10;
//         rev=rev*10+r;
//         n=Math.floor(n/10);
//     }
//     if(org==rev){
//         console.log("palindrom")
//     }else{
//         console.log("not palindrome")
//     }

// }
// // Write a program to find the sum of first 10 natural numbers using a do-while loop.
// {
//     let n=1;
//     var sum=0;
//     do{
//         sum+=n;
//         n++;
//     }while(n<=10)
//     console.log(sum)
// }
// // Write a program to calculate the square of each element of an array using a for loop.
// {
//     let arr=[1,2,3,4,5,6]
//     for(let val of arr){
//         console.log(val*val);
//     }
// }
// // Write a program to find the largest element in an array using a for loop.
// {
//     let arr=[1,2,3,4,5,6]
//     let max=Number.MIN_VALUE;

//     for(let val of arr){
//         if(val>max)
//         max=val;
//     }
//     console.log(max);
// }
// // Write a program to find the smallest element in an array using a while loop.
// {
//     let arr=[1,2,3,4,5,6]
//     let min=Number.MAX_VALUE;
    
//     for(let val of arr){
//         if(val<min)
//         min=val;
//     }
//     console.log(min);
// }
// // Write a program to count the number of vowels in a given string using a for loop.
// {
//     let str="chinmaya kumar das"
//     let count=0;
//     let al = [ 'a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U' ];
//     for(let i=0;i<str.length;i++){
//         if(al.includes(str[i]))
//         count++;
//     }
//     console.log("total vowel is "+count)
   
// }
// // Write a program to check if a given string is a palindrome using a for loop.
// {
//     let str="raceaecar"
//     let result="palindrome"
//     for(let i=0;i<str.length/2;i++){
//         if(str[i]!=str[str.length-1-i])
//         {
//             result="not palindrome"
//         }
        
//     }
//     console.log(result)
// }
// Write a program to reverse a given string using a for loop.
// {
//     // let str="chinmaya"
//     // let rev=''
//     // for(let i=str.length-1;i>=0;i--){
//     //     rev+=str.charAt(i)
//     // }
//     // console.log(rev)
// }
// // Write a program to check if a given number is an Armstrong number using a while loop.
// {
//     // let n = 370;
//     // let org = n;
//     // let res = 0;
    
//     // for (let temp = n; temp > 0; temp = Math.floor(temp / 10)) {
//     //     let r = temp % 10;
//     //     res += r ** 3; // Cube of each digit
//     // }
    
//     // if (org === res) {
//     //     console.log("Armstrong");
//     // } else {
//     //     console.log("Not");
//     // }
    
// }
// // Write a program to find the factorial of a number using a nested for loop.
{
    let n=5;
    let fact=1;
    for(let i=1;i<=n;i++){
        for(let j=i;j==i;j++){
            fact*=j;
        }
    }
    console.log(fact)
    
}
  

// // Write a program to find the sum of even numbers between 1 to 50 using a for loop.
// {
//     // let n=50;
//     // let sum=0;
//     // for(let i=1;i<=50;i++){
//     //     if(i%2==0)
//     //     sum+=i;
//     // }
//     // console.log("sum of all even number i s :"+sum)
// }
// // Write a program to find the sum of digits of a number until the sum becomes a single digit using a while loop.
// {
//     // let n=1234;
//     // let sum=0;
//     // while(n>0){
//     //     let r=n%10;
//     //     sum+=r;
//     //     n=Math.floor(n/10);
//     // }
//     // let temp=sum;
//     // if(temp>9){
//     //     while(temp>0){
//     //         let rem=sum%10;
//     //     sum+=rem;
//     //     temp=temp/10;
//     //     }
//     // }
//     // console.log(sum)
// }
// Write a program to find the LCM of two numbers using a for loop.
{

}
// Write a program to print all prime numbers between 1 to 100 using a for loop.
{
    function Prime(N){
        let result=true;
        for(let i=2;i<N;i++){
                if(N%i==0){
                    result=false
                }
        }
        return result;
    }
    function primePrint(n){
        let prime=[];
        for(let i=1;i<=n;i++){
            if(Prime(i)==true)
            prime.push(i);
        }
        return prime;

    }
  
    console.log(primePrint(100))
}
// Write a program to find the sum of all odd numbers between 1 to 100 using a while loop.
{
    function odd(n){
        let arr=[]
       for(let i=1;i<=n;i++){
        if(i%2!=0)
        arr.push(i);
       }
       return arr;
    }
    console.log(odd(100))
}
// Write a program to find the sum of all prime numbers between 1 to 100 using a for loop.
{
    function Prime(N){
        let result=true;
        for(let i=2;i<N;i++){
                if(N%i==0){
                    result=false
                }
        }
        return result;
    }
    function primeSum(n){
        let sum=0;
        for(let i=2;i<=n;i++){
            if(Prime(i)==true)
            sum+=i
        }
        return sum;

    }
  
    console.log(primeSum(100))
}
// Write a program to print the reverse of a given array using a for loop.
{
    let arr=[1,2,3,4,5,6]
    let Rev=[]
    for (let index = arr.length-1;  index>=0; index--) {
        Rev.push(arr[index])
    }
    console.log(Rev)
}
// Write a program to find the product of all elements of an array using a for loop.
{
    let arr=[1,2,3,4,5,6]
    let product=1;
    for (let index = 0; index < arr.length; index++) {
        product*=arr[index]
    }
    console.log(product)
}


// Write a program to find the factors of a number using a for loop.
{
    let n=120;
    let factor=[]
    for(let i=1;i<=n;i++){
        if(n%i==0)
        factor.push(i)
    }
    console.log("factors are--"+factor)
}
// Write a program to generate a series of n terms using the Fibonacci sequence using a for loop.
// Write a program to check if a given year is a leap year using a for loop.
{
    let year=2024;
    let result='not leap year';
    for(let i=year;i<=year;i++){
        if((year%4==0 && year%100!=0)|| year%400==0){
            result="leap year"
        }
    }
    console.log(result)
}
// Write a program to find the sum of squares of first n natural numbers using a for loop.
{
    let n=10;
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+(i*i)
    }
    console.log(sum)
}
// Write a program to find the sum of cube of first n natural numbers using a for loop.
{
    let n=10;
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+(i**3)
    }
    console.log(sum)
}
// Write a program to generate all Armstrong numbers between 1 to 1000 using a for loop.
{
    function Armstrong(n){
        let org=n
        let result=false
        let rev=0;
        for(let i=n;i>0;i=Math.floor(i/10)){
                let r=i%10;
                rev=rev*10+r;
        }
        if(rev==org){
            result=true
        }
        return result
    }
    function amsPrint(num){
        let ams=[]
            for(let i=1;i<=num;i++){
                if(Armstrong(i)==true){
                    ams.push(i)
                }
            }
            return ams
    }
    console.log(amsPrint(123))
}
// Write a program to generate the multiplication table of a number up to 10 using a for loop.
{
    // let n=13;
    // for(let i=1;i<=10;i++){
    //     console.log(n+" JA "+i+" ="+n*i)
    // }
}
// Write a program to check if a given number is a perfect square using a while loop.
{
    let n=6;
    let org=n;
    sum=0;
    while(n>0){
        
        if(!n && org%n==0){
            sum+=n;
        }
        n--;
    }
    if(sum==org){
        console.log(org+" is Perfect no")
    }else{
    console.log(org+" is Not Perfect no")
    }
}
// Write a program to find the sum of alternate numbers in a given range using a for loop.
{
    function sumOfAlternateNumbers(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i += 2) {
            sum += numbers[i];
        }
        return sum;
    }
    
    let sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Example sequence
    let sum = sumOfAlternateNumbers(sequence);
    console.log("Sum of alternate numbers:", sum);
    

}
// Write a program to calculate the power of a number using a for loop.
{
    // let n=8;
    // let pow=0
    // let result=1;
    // for(let i=1;i<=pow;i++){
    //     result*=n
    // }
    // console.log(Math.abs(result))
}


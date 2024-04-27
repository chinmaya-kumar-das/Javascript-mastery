//String practice
// Write a code to reverse a string.
let s = "chinmaya kuamar";
let newstr = "";
for (let i = s.length; i >= 0; i--) {
  newstr += s.charAt(i);
}
console.log(newstr);

//Implement a function code to check if a string is a palindrome.
let str = "abacabadcs";
function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
console.log(isPalindrome(str));

// Create a function to count the number of vowels in a string.
let string="chinmaya kumar das"
function vowels(string){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string.charAt(i)=="A"||string.charAt(i)=="E"||string.charAt(i)=="I"||string.charAt(i)=="O"||string.charAt(i)=="U"||string.charAt(i)=="a"||string.charAt(i)=="i"||string.charAt(i)=="o"||string.charAt(i)=="e"||string.charAt(i)=="u"){
            count++;
        }
    }
    return count;
}
console.log(vowels(string));

//Write a function to capitalise the first letter of each word in a sentence
// let strings=" i am a bad boy please stay out from me "
// function capword(string){
//     let x=string.trim();
//     let y=x.split(" ")
//     let newstrarr="";
//     for(let i=0;i<y.length;i++){
//         for(let j=1;j<y[i].length;j++){
//             newstrarr.push(y[j])
//         }
//         let capword=y[i]
//         new
//     }
//     return newstrarr.toString();
// }
// console.log(capword(strings));

// let a="asdf"
// console.log(a[1]);

//Create a function to remove all spaces from a given string.
let string1=" jdbed jedne hndwsds iwdwww wqswqswqs wqsdwqsdqwsdqwd . wdw wss swswqsws                           "
function remwhite(str){
    return string1.replaceAll(" ","");
}
console.log(remwhite(string1));

//Write a function to check if two strings are anagrams.

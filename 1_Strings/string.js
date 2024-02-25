//Reverse a string.
function reverses(str){
    let x=str.split("");
    let y= x.reverse().join("");
    return y;
}
console.log(reverses("chinmaya"));
// Check if a given string is a palindrome.
function palindrome(str){
    let x=str.trim();
        for(let i=0;i<x.length/2;i++){
            if(x.charAt(i)!=x.charAt(x.length-1-i)){
                return false;
            }

        }
        return true;
}
console.log(palindrome("raceaecar"));
console.log(palindrome("raceacarsrg"));
// Count the number of vowels in a string.
function vowels(strs){
    let str=strs.trim();
    let vowel=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=="A"|| str.charAt(i)=="E" ||str.charAt(i)=="I" ||str.charAt(i)=="O" ||str.charAt(i)=="U" ||str.charAt(i)=="a" ||  str.charAt(i)=="e" ||str.charAt(i)=="i" || str.charAt(i)=="0" ||str.charAt(i)=="u" )
        {
            vowel++;
        }
    }
    return vowel;
}
console.log(vowels("chinmaya kumar das  is a good boy,chinmaya kumar das  is a good boy"));

// Capitalise the first letter of each word in a sentence.
function capword(str){
    let string=str.split(" ");
    let newArr=[];
    //iteration
    for(let i=0;i<string.length;i++){
        //for access word
        let eachword=string[i];
        let newword=[];
        newword[0]=(eachword.charAt(0)).toUpperCase();
        for(let j=1;j<eachword.length;j++){
            newword[j]=eachword.charAt(j);
        }
        newArr.push(newword.join("") + " ");
    }
    console.log(typeof newArr);
    return newArr.join("").trim();
}
console.log(capword("i am a bad guy"));

// Remove duplicates from a string.


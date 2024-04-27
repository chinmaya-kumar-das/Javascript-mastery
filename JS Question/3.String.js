// Declare a string variable and print its length.
{
    let name="chinmaya kumar das"
    console.log(name.length)
}
// Declare two string variables and concatenate them.
{
    let fname="chinmaya"
    let lname="kumar"
    console.log(fname+" "+lname);
}
// Declare a string variable and convert it to uppercase.
{
    let str="convert it to uppercase"
    console.log(str.toUpperCase());
   
}
// Declare a string variable and convert it to lowercase.
{
    let str="convert it to lowercase"
    console.log(str.toLowerCase())
}
// Declare a string variable and print the first character.
// Declare a string variable and print the last character.
{
    let str="chinmay"
    console.log(str[0])
    console.log(str.charAt(0),str.charAt(str.length-1))
    console.log(str.at(0))
}
// Declare a string variable and print the characters from the second to the fourth position.
{
    let str="chinmaya kumar das"
    console.log(str.substring(1,5));
    console.log(str.substr(1,3));
    console.log(str.slice(1,4));
}
// Declare a string variable and print it reversed.
{
    let str=" i am bad guy     "
    let newStr=str.trim().split("");
    let arr2str=newStr.reverse().toString().replaceAll(",","");
    console.log(arr2str);

}
// Declare a string variable and count the number of occurrences of a specific character.
{
    let str="i am chinmaya kumar das"
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=="a")
        {
            count++;
        }
    }
    console.log(count);
}
// Declare a string variable and check if it contains another substring.
{
    let str="check if it contains another IT substring"
    console.log(str.includes("it"));
    console.log(str.includes("It"));
    // console.log(str.match("it"));
    console.log(str.search("/it/IT"));
}
// Declare a string variable and replace a specific character with another character.
{
    let name="chinmaya";
    console.log(name.replace("c","T"));
    console.log(name.replace("C","T"));
}
// Declare a string variable and split it into an array of substrings.
{
    let a="chinmaya kumar das is a bad guy"
    let split=a.split(" ");
    console.log(split);
}
// Declare a string variable and trim whitespace from both ends.
{
    let str="  i am bad        "
    console.log(str);
    console.log(str.trim());
}
// Declare a string variable and check if it starts with a specific substring.
{
    let str="chinmaya"
    console.log(str.startsWith("c"));
    console.log(str.endsWith("a"));
}
// Declare a string variable and check if it ends with a specific substring.
// Declare a string variable and extract a substring from it.
{
    let str="string is bad"
    console.log(str.substring(0,5));
}
// Declare a string variable and reverse each word in the string.
{
    let str="string is bad";
    let split=str.split(" ")
    console.log(split.reverse().join().replaceAll(","," "));
}
// Declare a string variable and capitalize the first letter of each word.
{
    let str="string is bad for me i"
    let arr=str.split(" ")
    let capitalize=[];
    for(let key in arr){
        let keys=key;
        arr[key]=arr[keys].charAt(0).toUpperCase()+arr[keys].substring(1)
        capitalize.push(arr[key])
    }
    console.log(capitalize.toString().replaceAll(","," "));
}
// Declare a string variable and remove all vowels from it.
{
    let str="Declare a string variable and remove all vowels from it"
    let al = [ 'a', 'e', 'i', 'o', 'u',  
    'A', 'E', 'I', 'O', 'U' ];
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(!al.includes(str[i]))
        newStr+=str[i]
    }
    console.log(newStr);
   
}
// Declare a string variable and remove all non-alphanumeric characters from it.
{
    let str="i am a bad gut 232$ ebn% *8w2 )"
    let newStr="";
    for(let i=0;i<str.length;i++){
        if((str[i]>="a" && str[i]<="z"))
        newStr+=str[i]
    }
    console.log(newStr);
}
// Declare a string variable and check if it's a palindrome.
{
    let str="raceaecar"
    let arr=str.split("").reverse().join().replaceAll(",","");
    if(str==arr)
    console.log("palindrome");
else{
    console.log("not a palindrome")
}
}
// Declare a string variable and sort its characters alphabetically.
{
    let str="chinmaya"
    console.log(str.split("").sort().join(""))
}
// Declare a string variable and shuffle its characters randomly.

// Declare a string variable and rotate its characters to the left by a given number of positions.
{
    let str="chinmaya kumar das"

}
// Declare a string variable and find the longest word in it.
{
    let str="i am a bad guys in the college"
    let arr=str.split(" ")
    let longest=''
    for(let key in arr){
        if(arr[key].length>longest.length)
        longest=arr[key];
    }
    console.log(longest)
}
// Declare a string variable and find the most frequent character in it.
// Declare a string variable and check if it's an anagram of another string.

// Declare a string variable and convert it to title case (capitalize the first letter of each word).
{
    let str="string is bad for me i"
    let arr=str.split(" ")
    let capitalize=[];
    for(let key in arr){
        let keys=key;
        arr[key]=arr[keys].charAt(0).toUpperCase()+arr[keys].substring(1)
        capitalize.push(arr[key])
    }
    console.log(capitalize.toString().replaceAll(","," "));
}
// Declare a string variable and find the index of the first occurrence of a specific character.
{
    let str="chinmaya kumar"
    console.log(str.indexOf("a"))
    console.log(str.lastIndexOf("a"))

}
// Declare a string variable and repeat it a specified number of times. 
{
    let str="chin"
    console.log(str.repeat(" "+5))

    console.log(`${str} is a good guy`)
}
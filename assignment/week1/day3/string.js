//Example#1

function messySentence (a){
//Split the string into an array of words
let cleanArray = a.split((" "));
console.log(cleanArray);


//Find the last word in the array
let lastWord = cleanArray.at(cleanArray.length-1);
console.log(lastWord);
//console.log(cleanArray.at(3));


// Calculate the length of the last word
let lengthOfWord = lastWord.length;
console.log("Length of last word = " + lengthOfWord);
}
messySentence ("Manual Testing to Automation");

/*--------------------End of Example#1-----------------------*/


//Example#2
function messyString(s) {
//Trim the String
let trimString = s.trim().replace(/\s+/g, ' ');
console.log("Before trim= " +s);
console.log("After trim= " +trimString);


//Split the String into Words 
let splitStrint = trimString.split((" "));
console.log(splitStrint);


//Identify the Last Word
let lastWord = splitStrint.at(splitStrint.length-1);
console.log(lastWord);


//Calculate the Length of the Last Word 
let lengthlastWord = lastWord.length;


//Return the length 
return lengthlastWord;
}
let lengthOfLastWord = messyString("   fly me   to   the moon  ");
console.log("Length of last word = " +lengthOfLastWord);


/* -------------------End of Example#2----------- */


//Example#3 

function sortAndConvert(str){
//Remove spaces and convert all letters to the same case
let removeSpace = str.trim().replace(/\s+/g,'');
let convertString = removeSpace.toLowerCase();

console.log("Before removing space and origional = "+str);
console.log("After removing space =  "+removeSpace);
console.log("After converting to Lowercase = " +convertString);


//Sort the Characters
let splitString = convertString.split("");
let sortString = splitString.sort().join();
console.log("After sorting = " +sortString);
}
sortAndConvert(" Hello   Test ")


//Compare Sorted Strings 
function compareSortedStrings(str1, str2) {

    console.log("Input String = "+str1+" and "+str2);
    // sort both input strings
    let sorted1 = sortAndConvert(str1);
    let sorted2 = sortAndConvert(str2);

    // 3. Compare Sorted Strings
    let areEqual = (sorted1 === sorted2);

    // 4. Return the Result
    return areEqual;
}


let stringA = "Hello World";
let stringB = "World Hello";

console.log(stringA+" and "+stringB + " are match = "+sortAndConvert(stringA,stringB));
 


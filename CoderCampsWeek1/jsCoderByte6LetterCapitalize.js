//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

//Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCapitalize(str) {
    "use strict";
    // code goes here 
    var strArray = str.split(" "); //take my string and separate it into an array of strings (strArray) using the .split method.
    var newString = "";
    for (var i = 0; i < strArray.length; i++) {
        var newWord = strArray[i].substr(0, 1).toUpperCase() + strArray[i].substr(1, strArray.length);
        newString = newString + " " + newWord;
        //alert(newString);
    }

    return newString;

}

var result = LetterCapitalize("this is the string that i will turn to capital letters");
alert(result);
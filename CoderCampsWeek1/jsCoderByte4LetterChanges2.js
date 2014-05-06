function LetterChanges(str) {
    "use strict";
    var alphabetArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var strArray = str.split("");
    for (var i = 0; i < strArray.length; i++) {
        var strIndex = alphabetArray.indexOf(strArray[i]);
        if (strIndex !== -1) {
            if (strArray[i] === "z") {
                strArray[i] = "a";
            } else {
                strArray[i] = alphabetArray[strIndex + 1];
            }
            
        }
        if (strArray[i] === "a" || strArray[i] === "e" || strArray[i] === "i" || strArray[i] === "o" || strArray[i] === "u") {
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    return strArray.join("");
}

var result = LetterChanges("hello*3zzz");
alert(result);
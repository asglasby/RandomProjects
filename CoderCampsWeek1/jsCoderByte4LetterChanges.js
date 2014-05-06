function LetterChanges(sen) {

    //sen.charCodeAt(i)
    var newString = "";
    var characterCodeToChange = "";
    var newCharacterCode = "";
    var newCharacter = "";
    sen = sen.toLowerCase();
    for (var i = 0; i < sen.length; i++) {

        characterCodeToChange = sen.charCodeAt(i);  //takes my sentence and converts the letters to the corresponding character code number.

        if (sen.charCodeAt(i) >= 97 && sen.charCodeAt(i) < 122) {
            newCharacterCode = characterCodeToChange + 1; //Then add 1 to the character code.
        } else if (sen.charCodeAt(i) === 122) {
            newCharacterCode = 97;
        } else {
            newCharacterCode = characterCodeToChange;
        }
        newCharacter = String.fromCharCode(newCharacterCode);
        if (newCharacter === "a" || newCharacter === "e" || newCharacter === "i" || newCharacter === "o" || newCharacter === "u") {
            newCharacter = newCharacter.toUpperCase();
        }
        newString = newString + newCharacter;
    }
    return newString;
};

var newSentence = LetterChanges("My New Sentence zzz");
alert(newSentence);

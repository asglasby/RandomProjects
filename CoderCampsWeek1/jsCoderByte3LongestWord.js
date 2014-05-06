function LongestWord(sen) {
    "use strict";

    var splitSentence = sen.split(" ");
    var wordToCompare = splitSentence[0];
    for (var i = 0; i < splitSentence.length; i++) {
        if (wordToCompare.length < splitSentence[i].length) {
            wordToCompare = splitSentence[i];
        }
    }

    return wordToCompare;
};

var result = LongestWord("I am a coding Ninja even if it takes me hundreds of days to master");
alert(result);
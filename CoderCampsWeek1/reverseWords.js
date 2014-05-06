var givenSentence = "A quick brown fox jumped over the lazy dog";

function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");

   
};

alert(reverseWords(givenSentence));

//var result = reverseWords("A blue moon, koos helooo!");
//alert(result);
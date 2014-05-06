function FirstReverse(str) {
    i = str.length;
    var newStr = "";
    
    while (i >= 0) {
        str1 = str.charAt(i);
        newStr = newStr + str1;
        i--;
    }
    alert(newStr);
    // return newStr;
    //console.log(newStr);
};
//var h = FirstReverse("Coderbyte1");
//alert(h);
FirstReverse("This is a test");
function FirstFactorial(num) {
    "use strict";
    var factorials = 1;
    for (i = num; i >= 1; i--) {
        factorials = factorials * i;
    }
    return factorials;
};

var factorialNum = FirstFactorial(8);
alert(factorialNum);


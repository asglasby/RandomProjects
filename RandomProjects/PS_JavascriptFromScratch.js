"use strict"
//Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
//Strict mode helps out in a couple ways:

//It catches some common coding bloopers, throwing exceptions.
//It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
//It disables features that are confusing or poorly thought out.
// 

//if statement and if else example
var ageAsString = prompt("What is your age?", "");
var age = Number(ageAsString);
if (age < 40) {
    alert("Oh you're so young...");
}
else if (age === 40) {
    alert("Hey, you're 40!")
}
else {
    alert("Don't worry, you're young at heart");
}

alert("Thank you");

//while loop example  - while may never run
var string = "";
while (age > 0) {
    string += "Happy Birthday \n";
    age = age - 1;
}
alert(string)

//do while loop example.... a do while loop will run at least once because the while is at the end.
age = 35;
var myString = "";
do {
    myString += "Happy Birthday \n";
    age -= 1;
} while (age > 0)
alert(myString);


//for loop example
age = 29;
string = "";
for (var theAge = age; theAge > 0; theAge -= 1) {
    string += "Happy Birthday\n";
    //alert(string);
}

//break statement example - break statement will break out of the loop as soon as the condition has been met
age = 45;
string = "";
for (var counter = 1; counter < age; counter += 1) {
    string += "Happy Birthday\n";
    if (counter % 7 == 0) {
        alert(counter);
        break;
    }
}
alert(string);


//sample Switch statement - don't forget to include a default statement

var animal = "dog";

switch (animal) {
    case "cat":
        alert("meow");
        break;
    case "dog":
        alert("woof");
        break;
    case "horse":
        alert("whinny");
        break;
    default:
        alert("Unknown animal!");
        break;
}

var isMale = true;
var isOld = true;
var isOldMan = isMale && isOld;  // both sides of statement need to be true in order for the statement to be considered true. && requires both sides to be true
alert(isOldMan);
var isFemale = false;
var isOldMan = isFemale || isOld; // only one side of the statement need be true when || is used.
alert(isOldMan);


// sample of truthyness  // && both side true  || either side true //  ! reverses truth //  ==equals vs. === exact equality
var x = 5;
//var y = x < 10 ? x : 10;

var y;
if (x < 10)

{
    y = x;
}
else
{
    y = 10;
}

//a function named askname that prompts a user to enter their name and assigns the variable username to the name
function askName() {
    var userName = prompt("Enter name");
}
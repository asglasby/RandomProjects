//Javascript Arrays

var years = [];//defines an array
years.push(2000, 2001, 2002, 2003, 2004); //pushes the years 2000 - 2004 into the years array.
var months = ["January", "February", "March", "April"];//defines an array months with items included in the array
var fruits = ["Apple", "Orange", "Pear", "Banana"];


//The concat method returns a new array comprised of this array joined with other arrays and or values
var yearsMonths = years.concat(months, fruits);
//alert(yearsMonths);


//Example Concatenating values to an arrays
var alpha = ["a", "b", "c"];

//creates array["a", "b", "c", 1, 2, 3], leaving alpha unchanged
var alphaNumeric = alpha.concat(2, 4, 6);  // bracets can also be used - alpha.concat([1,2,3])
alert(alphaNumeric);


// Array methods most commonly used
// slice, splice, push, pop, shift, unshift
//push - adds something to the end of the list array.push("berries");
//pop - takes the last item from the end of the array. array.pop("candy"); popping it off the end.
//unshift - adds an item to the top of the list into the first position - array.unshift("shampoo");
//shift - take an item from the beginning of the array - array.shift(); - will take the first item from the front of the array.

// the result of push, pop, shift can be caught into a variable.

//slice method returns a shallow copy of the portion of an array - array.slice(begin[, end]) - up to but not including the end.

//splice method changes the content of an array, adding new elements while removing old elements. - allows an edit from inside the array. array.splice(index, howMany[]) array.splice(startingPosition, numElmentsToRemove[replaceWith];  start here and remove here plus whatever and returns what has been spliced.

alert("Pascal Case example: TodayIsTuesday - The first letter is uppercase then the first letter of each additional word");
alert("Camel Case example: todayIsTuesday - the first letter is lowercase then the first letter of each additional word is upperCase");
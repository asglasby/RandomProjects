

//You can't use both the script file and the .js file the .js file will overwrite what's written in between the script tags.

//you can put javascript outside of the script tag and it will get written, but it is best to leave it in the .js file and pull from one location.

//gmail is written in javascript

function cakeMaker(recipe, cakenumber) {
    var cake = recipe;
    
    for (var i = 0; i < cakenumber; i = i + 1) {
        cake = cake + cake;
    }
    return cake;  // the result of the cake
};

var platter = cakeMaker("Flour, oil, sugar, frosting", 10); // the variable platter will hold the return of cake

alert(platter);

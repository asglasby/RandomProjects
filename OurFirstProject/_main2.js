var platter;

function cakeMaker(recipe, cakenumber) {
    var cake = recipe;

    for (var i = 0; i < cakenumber; i = i + 1) {
        cake = cake + cake;
    }
    return cake;  // the result of the cake
    //platter = cake;
};

platter = cakeMaker("Flour, oil, sugar, frosting", 10); // the variable platter will hold the return of cake

alert(platter);

function SimpleAdding(num) {
    var total = 0;
    for (i = 0; i <= num; i++) {
        total = total + i;

    }
    return total;
}

var result = SimpleAdding(12);
alert(result);
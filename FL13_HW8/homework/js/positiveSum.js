function positiveSum(array) {
    let reducer = array.reduce(function(a, b) {
        if (a < 0) {
            a = 0;
        }
        if (b < 0) {
            b = 0;
        }
        return a + b;
    });
    return reducer;
}
positiveSum([0, -3, 5, 7]);
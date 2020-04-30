function getDifference(a, b) {
    let c = a - b;
    if (c < 0) {
        c *= -1;
    }
    return c;
}
getDifference(5, 8);
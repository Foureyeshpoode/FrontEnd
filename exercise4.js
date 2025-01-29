function countChar(value) {
    return value.length;
}
function countChar2(value) {
    return value.trim().length;
}
function countBoth(myString, spaces) {
    var num;
    if (spaces) {
        num = myString.length;
    }
    else {
        num = myString.trim().length;
    }
    return num;
}
console.log(countChar(" test 1 "));
console.log(countChar2(" test 1 "));
console.log(countBoth(" test 1 ", true));
console.log(countBoth("Test1", false));

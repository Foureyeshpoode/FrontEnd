function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 1;
var secondVal = 2;
var sumOfVal = (firstVal + secondVal).toLocaleString();
addition(sumOfVal);
var flag = true;
console.log("Value assigned to flag is: " + flag);
var myArray = [2, 4, 6];
for (var i = 0; i < myArray.length; i++) {
    console.log("Element: " + myArray[i] + " is in my myArray");
}
myArray.forEach(function (element) {
    console.log("Element: " + element);
});
var unKnown = "ajhsjhj";
console.log("he Value of unKnown is: " + unKnown);
var Colour;
(function (Colour) {
    Colour[Colour["pen"] = 1] = "pen";
    Colour[Colour["pencil"] = 2] = "pencil";
    Colour[Colour["eraser"] = 4] = "eraser";
})(Colour || (Colour = {}));
;
console.log(Colour.eraser);

var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray2 = ["String 1", "String 2"];
    }
    myClass.prototype.addTask = function (value) {
        this.myArray2.push(value); //adding value as new element to the array
        console.log("Insertion Successful"); //displaying message to the console
        return this.myArray2.length; //returning length of array
    };
    myClass.prototype.listAllTasks = function () {
        this.myArray2.forEach(//looping through each element of array - for loop could have been used here
        function (element) {
            console.log(element + " is in my task list"); //displaying message to the console
        });
    };
    myClass.prototype.deleteTask = function (value) {
        var index;
        index = this.myArray2.indexOf(value); //Telling array what index we are looking for
        if (index != -1) { //Checking to see if array index is > -1 - we do this because if the array has no elements it's default array will be -1
            this.myArray2.splice(index, 1); //deleting array element
            console.log(value + " is removed from my list"); //displaying message to console
        }
        else {
            console.log(value + " is not in my taks list"); //displaying message to console
        }
        return this.myArray2.length; //returning length of array
    };
    return myClass;
}());
var myTask = new myClass();
console.log(myTask.addTask("Task")); //printing out addTask fucntion
myTask.listAllTasks(); //calling listAllTasks fucntion
console.log(myTask.deleteTask("Task")); //printing out deleteTask function

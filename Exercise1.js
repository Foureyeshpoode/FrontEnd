var myArray = ["String 1", "String 2"]; //iniatilizing / Declaring new string array
function addTask(value) {
    myArray.push(value); //pushing string param into my array
    console.log("Insertion Successful"); //Display message to the console
    console.log(myArray.length); //Displaying length of array to the console
}
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++) { //looping over each array element - myArray.foreach could also be used here
        console.log(myArray[i]); //Displaying each array elemnt to the console
    }
}
function deleteTask(value) {
    var index; //Decalring new variable called index that is a number data type
    index = myArray.indexOf(value); //Telling array what index we are looking for
    myArray.splice(index, 1); //deleting specified index
    console.log("Deletion Successful"); //Displaying message to the console
    console.log(myArray.length); //Displaying length of array to the console
}
addTask("Task"); //Calling addTask fucntion and passing "Task"
listAllTasks(); //Calling listAllTasks function
deleteTask("Task"); //Calling deleteTask function and passing "Task"

interface myInterface{
    myArray2:string[];//Initilaizing a string array myArray2
    addTask(value:string): number;//creating addTask function witha a string param and returns a number
    listAllTasks(): void;//creating listAllTasks function with no params and of type void
    deleteTask(value:string): number;//creating delete Task function with a string param and retuns a number
}

class myClass implements myInterface{
    myArray2: string[] = ["String 1", "String 2"];
    addTask(value:string): number{//calling addTask function
        this.myArray2.push(value);//adding value as new element to the array
        console.log("Insertion Successful");//displaying message to the console
        return this.myArray2.length;//returning length of array
    }

    listAllTasks(): void{
        this.myArray2.forEach(//looping through each element of array - for loop could have been used here
            (element)=>{
                console.log(element + " is in my task list");//displaying message to the console
            }
        );
    }

    deleteTask(value: string): number{
        let index:number;
        index = this.myArray2.indexOf(value);//Telling array what index we are looking for
        
        if(index != -1){//Checking to see if array index is > -1 - we do this because if the array has no elements it's default array will be -1
            this.myArray2.splice(index, 1);//deleting array element
            console.log(value + " is removed from my list");//displaying message to console
        }else{
            console.log(value + " is not in my taks list");//displaying message to console
        }
            
        return this.myArray2.length;//returning length of array
    }
}
let myTask = new myClass();
console.log(myTask.addTask("Task"));//printing out addTask fucntion
myTask.listAllTasks();//calling listAllTasks fucntion
console.log(myTask.deleteTask("Task"));//printing out deleteTask function
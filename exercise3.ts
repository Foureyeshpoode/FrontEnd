function addition(value: string){//created function addition
    console.log("Value is: " + value);//outputting to console
}

let firstVal: number = 1;//assigning var fisrtVal as a number
let secondVal: number = 2;//assigning var secondVal as a number
let sumOfVal: string = (firstVal + secondVal).toLocaleString();//assigning var sumOfVal as a string and the addition of previous 2 vars

addition(sumOfVal);//calling fucntion addition

let flag: boolean = true;//assigning var flag as a boolean
console.log("Value assigned to flag is: " + flag);//outputting to console

let myArray: Array<number> = [2,4,6];//assigning var myArray as a number array 
for(let i=0; i<myArray.length; i++){//creating for loop
    console.log("Element: " + myArray[i] + " is in my myArray");//outputting indexes to console
}

myArray.forEach((element)=>{//creating a fucntion to loop through array to ouput each index 
    console.log("Element: " + element);//outputting index to console
})

let unKnown:any = "ajhsjhj";//assigning var unKnown as a any
console.log("he Value of unKnown is: " + unKnown);//outputting to console

enum Colour{pen=1, pencil=2, eraser=4};//assigning var Colour as an enum
console.log(Colour.eraser);//outputting to console
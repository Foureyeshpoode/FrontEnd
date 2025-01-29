function countChar(value:string):number{
    return value.length;
}

function countChar2(value:string):number{
    return value.trim().length;
}

function countBoth(myString:string, spaces?:boolean):number{
    let num:number;
    if(spaces){
        num = myString.length;
    }
    else{
        num = myString.trim().length;
    }
    return num;
}

console.log(countChar(" test 1 "));
console.log(countChar2(" test 1 "));
console.log(countBoth(" test 1 ", true));
console.log(countBoth("Test1", false));
console.log(countBoth("Test1"));
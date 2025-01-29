function countChar(value:string):number{//created function countChar with param string
    return value.length;//returned length of value
}

function countChar2(value:string):number{//created function countChar with param string
    return value.trim().length;//returned trimmed length of value
}

function countBoth(myString:string, spaces?:boolean):number{//created fucntion countBoth with params string and boolean
    let num:number;//assigned var num as a number
    if(spaces){//created an if statement for when spaces is true
        num = myString.length;//assigned num as myString.length
    }
    else{//created default scenario for spaces
        num = myString.trim().length;//assigned num as myString.trime().length
    }
    return num;//return the value of num
}

console.log(countChar(" test 1 "));//outputted countChar to console with param as " test 1 "
console.log(countChar2(" test 1 "));//outputted countChar2 to console with param as "test 1"
console.log(countBoth(" test 1 ", true));//outputted countChar to console with param as " test 1 ", true
console.log(countBoth("Test1", false));//outputted countChar to console with param as "Test1", false
console.log(countBoth("Test1"));//outputted countChar to console with param as "Test1", and default for spaces
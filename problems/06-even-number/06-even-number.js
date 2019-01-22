/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if(typeof(someNum) !== 'number'){
        console.log("error: not a positive number. returning n")
        return someNum;
    }
    if(isNaN(sumNum)){
        console.log('error: NaN is not a number. returning sumNum')
        return sumNum;
    }
    //bitwise and checks the first bit for a one, if its a one it is divisible by 2
    //you have to not because of signed number
    if(!someNum & 1){
        return true;
    }
    return false;
}


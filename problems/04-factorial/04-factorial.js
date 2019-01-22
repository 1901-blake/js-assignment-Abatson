/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    //check to make sure it is a number
    if(typeof(sumNum) !== 'number'){
        console.log("error: not a positive number. returning sumNum")
        return sumNum;
    };
    if(isNaN(sumNum)){
        console.log('error: NaN is not a number. returning sumNum')
        return sumNum;
    }
    //check for negative numbers
    if(sumNum < 0){
        console.log("error: Negative Number. Returning sumNum");
        return sumNum;
    };
    //if n is zero return 1, a base case for recursion
    if(sumNum === 0){
        return 1;
    };
    //if n is one return one, a base case for recursion
    if(sumNum === 1){
        return 1;
    };
    return sumNum * factorial(sumNum -1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(10));
console.log(factorial(null));
console.log(factorial('hello'));
console.log(factorial(NaN));

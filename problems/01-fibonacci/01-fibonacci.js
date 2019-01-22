/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    //check for any non number inputs
if(typeof(n) !== 'number'){
    console.log("error: not a positive number. returning n")
    return n;
}
//check for negative numbers
if(n < 0){
    console.log("error: Negative Number. Returning n");
    return n;
}
if(isNaN(n)){
    console.log('error: NaN is not a number. returning sumNum')
    return n;
}
//if n is zero return 0, a base case for recursion
if(n === 0){
    return 0;
}
//if n is one return one, a base cse for recursion
if(n === 1){
    return 1;
}
//recursively call fib until getting to one and zero
return fib(n-1) + fib(n-2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(-1));
console.log(fib('hello'));
console.log(fib(null));
console.log(fib(10));
/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    //error handling
    //make sure somestring is a string
    if(typeof(someStr) !== 'string'){
        throw new Error('Usage:someStr needs to be a string')
    }
    if(someStr.length === 0 || someStr.length === 1){
        return someStr;
    }
    let returnString = '';
    for( let i = someStr.length - 1; i >= 0; i--){
        returnString += someStr.charAt(i);
    }
    return returnString;
}

console.log(reverseStr('hello'));
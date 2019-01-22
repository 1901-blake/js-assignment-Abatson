/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    //error handling
    //make sure somestring is a string
    if(typeof(someStr) !== 'string'){
        throw new Error('Usage:someStr needs to be a string')
    }
    //make sure both indices are real number
    if(typeof(startIndex) !== 'number' || typeof(endIndex) !== 'number' || isNaN(startIndex) || isNaN(endIndex)){
        throw new Error('Usage: indices need to be numbers')
    }
    //make sure startindex is in bounds
    if(startIndex < 0 ){
        startIndex = 0;
    }
    //make sure start index comes before end index
    if( endIndex < startIndex){
        throw new Error('Usage: endIndex must be equal to or after startIndex')
    }
    //if endindex is greater then length, set it to length
    if(endIndex > someStr.length){
        endIndex = someStr.length;
    }
    //if startindex is out of bounds return empty string
    if(startIndex > someStr.length - 1){
        return '';
    }

    let returnString = '';
    for(let i = startIndex; i < endIndex; i++){
        returnString += someStr[i];
    }
    return returnString;
}

//normal test
try{
    console.log(substring('hello', 2, 5));
}catch(e){
    console.log(e);
}
//not a string
try{
    console.log(substring(5, 2, 5));
}catch(e){
    console.log(e);
}
//end oob
try{
    console.log(substring('world', 2, 7));
}catch(e){
    console.log(e);
}
//start oob
try{
    console.log(substring('potato', -2, 5));
}catch(e){
    console.log(e);
}
//end less then start, and negative
try{
    console.log(substring('mango', 2, -5));
}catch(e){
    console.log(e);
}
//index is a nan
try{
    console.log(substring('hello', NaN, 5));
}catch(e){
    console.log(e);
}





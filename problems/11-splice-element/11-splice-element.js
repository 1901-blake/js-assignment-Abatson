/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

//returns new array with indexed element removed
function spliceElement(someArr, index) {
    //
    if(!Array.isArray(someArr)){
        console.log("error: not an array. returning someArr");
        return someArr;
    }
    //make sure index is a real number
    if(typeof(index) !== 'number' || isNaN(index)){
        throw new Error('Usage: indices need to be numbers')
    }
    //make sure startindex is in bounds
    if(index < 0 ){
        index = 0;
    }

    let retArr = [];
    for(let i = 0; i < someArr.length; i++){
        if(i === index){
            //don't keep
        }else{
            retArr.push(someArr[i]);
        }
    }
    return retArr;
  
}

let arr = [1,2,3,4,5,6,7,8]

console.log(spliceElement(arr, 0));
console.log(spliceElement(arr, 2));
console.log(spliceElement(arr, 4));
console.log(spliceElement(arr, 7));

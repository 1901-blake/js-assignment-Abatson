/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    //make sure it is an array
    if(!Array.isArray(numArray)){
        console.log("error: not an array. returning numArray");
        return numArray;
    }
    //if length is 0 or 1, its already sorted
    if(numArray.length < 2){
        return numArray;
    }
    let sorted = false;
    //while it isn't sorted, compare each element to the one on the right and swap them if the left is greater
    //repeat until you go through without a swap
    while(!sorted){
        sorted = true;
        //console.log('started', numArray)
        numArray.forEach(function(value, index, arr) {
            if(index === arr.length -1){
                return;
            }
            if(value > arr[index + 1]){
                //console.log(arr);
                arr[index] = arr[index+1];
                arr[index+1] = value;
                sorted = false;
            }
        });
    }
    return numArray;
}

//testing
let arr1 = [1,2,3,4,5];
let arr2 = [];
let arr3 = [0];
let arr4 = [5,4,3,2,1];
let arr5 = ['e', 'd', 'c', 'b', 'a']
console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));
console.log(bubbleSort(arr3));
console.log(bubbleSort(arr4));
console.log(bubbleSort(arr5));

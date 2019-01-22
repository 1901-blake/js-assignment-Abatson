/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    if(typeof(someStr) !== 'string'){
        throw new Error('Usage:someStr needs to be a string')
    }
    if(someStr.length === 0 || someStr.length === 1){
        return true;
    }
    for(let i = 0; i < someStr.length; i++){
        if(someStr.charAt(i) !== someStr.charAt(someStr.length - i - 1)){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('hello'))
console.log(isPalindrome('holloh'))

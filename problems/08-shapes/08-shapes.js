/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  if(!(shape === "Square" || shape ==="Triangle" || shape === "Diamond")){
    console.log("Error: Usage shape needs to be Triangle, Square, or Diamond")
    return '';
  }
  if(typeof(height) !== 'number'){
    console.log("error: not a positive number. returning n")
    return '';
  }
  if(isNaN(height)){
    console.log('error: NaN is not a number. returning sumNum')
    return '';
  }
  if(height % 2 !== 1){
    console.log('error: height must be odd')
    return '';
  }
  if(character.length > 1){
    console.log("error: character must be a single character")
    return ' ';
  }
  
  let returnString = ''
  if(shape === "Square"){
    let tmpString = ''
    for(let i = 0; i < height; i ++){
      tmpString += character;
    }
    tmpString += '\n'
    for(let i = 0; i < height; i ++){
      returnString += tmpString;
    }
  }
  if(shape === "Triangle"){

    for(let i = 0; i < height; i++){
      let tmpString = character;
      for(let j = 0; j < i; j++){
        tmpString += character
      }
      tmpString += '\n';
      returnString += tmpString
    }

  }
  if(shape === "Diamond"){
    let tmpString = ''
    for(let i = 0; i < height/2; i++){
      tmpString = ''
      for(let j = 0; j < height; j++){
        if(j < i || j > height - i - 1){
          tmpString += ' ';
        }else{
          tmpString += character;
        }
      }
      tmpString += '\n'
      if(i === 0){
        returnString = tmpString;
      }else{
        returnString = tmpString + returnString + tmpString;
      }
    }
  }
  return returnString;
}

console.log(printShape('Square', 5, '%'))
console.log(printShape('Square', 3, '^'))
console.log(printShape('Triangle', 1, '^'))
console.log(printShape('Triangle', 3, '^'))
console.log(printShape('Triangle', 5, '^'))

console.log(printShape('Diamond', 1, '^'))
console.log(printShape('Diamond', 3, '^'))
console.log(printShape('Diamond', 5, '^'))
console.log(printShape('Diamond', 27, '*'))
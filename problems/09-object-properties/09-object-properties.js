/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    if ( typeof(someObj) !== 'object'){
        throw new Error('Usage:someObj needs to be an object')
    }
    if ( someObj === null) {
        throw new Error('Usage:someObj needs to not be null')
    }
    let keys = Object.keys(someObj);
    keys.forEach(element => {
        console.log(`Object key: ${element} object value ${someObj[element]}`);
    });

}

let obj = {
    name: 'dominique',
    description: 'a real busta'
}


try{
    objectProperties(obj);
}catch(e){
    console.log(e);
}
try{
    objectProperties(null);
}catch(e){
    console.log(e);
}
try{
    objectProperties('stinrg');
}catch(e){
    console.log(e);
}
try{
    objectProperties(5);
}catch(e){
    console.log(e);
}
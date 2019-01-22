/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

const obj = {
    name: '',
    age: 0
}

function objMaker(name, age) {
    this.name = name;
    this.age = age;
}

class ObjTest{
    constructor( name, age){
        this.name = name;
        this.age = age;
    }
}
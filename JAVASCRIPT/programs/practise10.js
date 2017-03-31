"use strict";
var human={
    name:"santhosh",
    height:5.10
};
Object.defineProperty(human,"name",{writable:false});
human.name="aditya";
console.log(Object.getOwnPropertyDescriptor(human,"name"));

var boy={
    name: {
        firstName:"aditya", lastName:"koushik"},
        height: 5.10
};

Object.defineProperty(boy,"name", {writable:false});
boy.name.firstName="rakesh";
console.log(Object.getOwnPropertyDescriptor(boy,"name"));


/* it changes the value of firstName from "Aditya" to "rakesh" since writable:false property if set for name property not firstName object */

/* to avoid the above problem we can use Object.freeze() to freeze the value on the entire name object */

Object.defineProperty(boy,"name", {writable:false});
Object.freeze(boy.name);
boy.name.firstName="rakesh";
console.log(Object.getOwnPropertyDescriptor(boy,"name"));

/* if we try to execute we will get an error since the property is set to read only */

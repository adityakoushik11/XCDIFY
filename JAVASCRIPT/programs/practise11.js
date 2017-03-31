// for...in loop
var a={ name: {firstName:"aditya", lastName:"koushik", weight:70}};
for(var propertyName in a)
{
    console.log(propertyName +":"+ a[propertyName] );
}

var person={fname:"steve",lname:"smith", age:30};
var text="";
var x;
for(x in person)
{
    text+=person[x];
}


//enumerable property
var cat={
    name: {
        fname:"fliffy",
        lname:"scratch",
    },
    color:"white"
};

Object.defineProperty(cat,"name", {enumerable:false});
for(var propertyName in cat)
{
    console.log(propertyName +":"+ cat[propertyName]);
    
}

// setting enumerable false , it will not show up in object keys

console.log(Object.keys(cat));





//configurable property

var a={
    name:"aditya",
    height:5.10
    };
    Object.defineProperty(a,"name", {configurable:false});
    Object.defineProperty(a,"name", {enumerable:false});
    
    delete a.name;  /*configurable property locks down a property and revents certain attributes from being changed
it also prevents a property from being deleted*/





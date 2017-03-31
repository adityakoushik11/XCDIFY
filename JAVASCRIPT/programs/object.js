var obj1 = new Friend(prompt("enter the name"),prompt("enter the age"));
var obj2 = new Friend(prompt("enter the name"),prompt("enter the age"));

function Friend(name)
{
    this.name = name;
    
}

console.log("name is " +obj1.name);
console.log("age is " +obj1.age);

console.log("name is "+ obj2.name);
console.log("age is "+ obj2.age);

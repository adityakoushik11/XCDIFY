var a1=new Person(prompt("enter the name"),prompt("enter the age"),prompt("enter the martial status"));
var a2=new Person(prompt("enter the name"),prompt("enter the age"),prompt("enter the martial status"));

function Person(name,age,isMarried)
{

        this.name=name;
        this.age=age;
        this.isMarried=isMarried;

}
console.log("the name is " +a1.name);
console.log("the age is " +a1.age);
console.log("the martial status is " +a1.isMarried);

console.log("the name is " +a2.name);
console.log("the age is " +a2.age);
console.log("the martial status is " +a2.isMarried);


// TO CREATE OBJECT USING CLASS [supports from ECMASCRIPT 6]
class Dog
{
    constructor(name,color,cost)
    {
        this.name=name;
        this.color=color;
        this.cost=cost;
    }
    
    bark()
    {
        console.log("bowwwwwww");
    }
}
var dog=new Dog(prompt("enter the name"),prompt("enter the age"),prompt("enter the cost"));
console.log("name is " +dog.name);
console.log("color is " +dog.color);
console.log("cost is " +dog.cost);
dog.bark();

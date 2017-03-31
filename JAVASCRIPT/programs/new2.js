// CREATING A PROTOTYPAL INHERITANCE

function Animal()
{
}

Animal.prototype.speak=function()
{
    console.log("grunt");
}

function Cat(name,age)
{
    this.name=name;
    this.age=age;
}

Cat.prototype=Object.create(Animal.prototype);
var fluffy=new Cat("fluffy",23);
fluffy.speak();


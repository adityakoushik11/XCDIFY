// CREATING PROTOTYPE WITH CLASS

class Animal
{
    constructor(voice)
    {
        console.log("grunt");
    }
    
    speak()
    {
        console.log(this.voice);
    }
}

class Cat extends Animal
{
    constructor(name,color)
    {
        super();
        this.name=name;
        this.color=color;
    }
}
var fluf=new Cat("fluffy","white");
fluf.speak();        
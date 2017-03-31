class Car
{
    constructor(name,modelYear,spe)
    {
        this.name=name;
        this.modelYear=modelYear;
        this.mileage();
    }
    mileage()
    {
        if(this.name==="swift" && this.modelYear===2012)
        {
            var mil=speed/10;
            console.log("their average speed is " +mil);
        }
    }
}
var car=new Car(prompt("enter the car name"), prompt("enter the model year"), prompt("enter the speed") );
car.mileage();

var Person=function(name,age)
{
    this.name=name;
    this.age=age;
    
    this.update=function()
    {
        if(name!==null && age!==0)
        {
            console.log("saved files name is " +person.name );
            console.log("user age is " +person.age);
        }
        else
        {
            alert("name and age are null");
        }
    }
    
}
var person=new Person(prompt("enter the name"), prompt("enter the age"));
person.update();
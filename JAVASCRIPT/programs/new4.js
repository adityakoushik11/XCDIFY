// CONSTRUCTOR PATTERN

var Task=function(name)
{
    this.name=name;
    this.completed=false;
    
    this.completed=function()
    {
        //console.log("completing task" +task.name);
        this.completed=true;
        this.save();
    }
    
    this.save=function()
    {
        if(task.completed===true)
        {
            console.log("saving task" +this.name);
        }
        else
        {
            alert("task in incomplete");
        }
        
    }
}
var task=new Task("file update");
task.completed();



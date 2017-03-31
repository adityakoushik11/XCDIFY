var three=3; //global variable
function example()
{
    var one=1; //local variable but global to function example2()//
    alert(three);
    function example2()
    {
        var two=2; //local 
        alert(three);
        alert(two);
        alert(one);
    }
}
exaple();
example2();
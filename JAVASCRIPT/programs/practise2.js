var sign=prompt("enter your zodiac sign");
switch(sign)
{
    case "leo": console.log("your zodiac is "+sign);
        break;
    case "virgo": console.log("your zodiac is " +sign);
        break;
    default: console.log("your zodiac is not in the list !!!");
        
}

var b=Math.round(Math.random() *100);
console.log(b);

if(b%3===0)
{
    console.log("fizz");
    if(b%5===0)
    {
        console.log("fizzbuzz");
    }
}
else if(b%5===0)
{
    console.log("buzz");
}
else
{
    confirm("invalid number");
}

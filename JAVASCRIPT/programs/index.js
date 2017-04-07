var a=Math.round(Math.random()*100);
var b=Math.round(Math.random()*100);

var total=die_count(a,b);
console.log("the total count is : " +total);
function die_count(first,second)
{
  if(first >= 5 && second >5)
  {
    return "great roll" + " "+ (first+second);
  }
  else{
    return "normal roll" +" "+ (first+second);
  }
}

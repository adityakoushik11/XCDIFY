var a=prompt("enter the value of a");
var b=prompt("enter the value of b");
/*if(a==0)
{
  try {
    var c=a/b;
  } catch (e) {
    console.log(e);
  } finally {
    console.log("this parts will always execute");

  }
}
*/
if(a==0)
{
  throw "invalid entry";
}
else {
  try {
    var c=a/b;
    console.log(c);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("this part will always execute");
  }
}

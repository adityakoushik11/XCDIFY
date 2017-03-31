// EXCEPTIONAL HANDLING IN javascript
var a=prompt("enter the age");
vote(a);

function vote(b)
{
  if(b<18)
  {
    throw"under age";
  }
  else {
    {
      try {
        {
          console.log("vote has been accepted");
        }
      } catch (e) {
        console.log(e.message);
      } finally {
        console.log("voting process ended");
      }
    }
  }
}

//errors in javascript

var x;
try {
  {
    x=y+1;
  }
} catch (e) {
  console.log(e.name); // Reference error
} finally {
  console.log("bye");
}

var a=1;
try {
  a.toPrecision(500);
} catch (err) {
  console.log(err.name); //Range error
} finally {
  console.log("good bye");
}

var x;
try {
  console.log('hello"); //syntax error
} catch (ar) {
  console.log(ar.name);
} finally {
  console.log("hi");
}

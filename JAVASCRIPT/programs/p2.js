// EXAMPLES FOR FUNCTIONS



// die roll program

var first_die=Math.ceil(Math.random()*6);
var second_die=Math.ceil(Math.random()*6);

total_sum=die_count(first_die,second_die);
console.log("the total sum is : " +total_sum);

function die_count(first, second)
{
	a=first;
	b=second;
	c=a+b;
	return c;
}


// fibonacci

var n1=0,n2=1,n3,counter=10;
console.log(n1 +" "+ n2);
for(var i=2;i<counter;i++)
{
	n3=n1+n2;
	console.log(n3);
	n1=n2;
	n2=n3;
}



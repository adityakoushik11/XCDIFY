/*var first_die=Math.ceil(Math.random()*6);
var second_die=Math.ceil(Math.random()*6);

total_sum=die_count(first_die,second_die);
console.log(total_sum);

function die_count(first, second)
{
		if(first >= 5 && second >= 5)
	{
		return "great roll" +" "+ (first+second);
	}
	else if(first ==4 && second ==4)
	{
		return "good rool" +" "+ (first+second);
	}
	else
	{
		return "bad roll" +" "+ (first+second);
	}

}
*/


// using for loop

var first_die=Math.round(Math.random()*6);
var second_die=Math.round(Math.random()*6);

total_sum=die_count(first_die,second_die);
console.log("the total sum is : " +total_sum);

function die_count(first, second)
{
	return first+second;
	

}

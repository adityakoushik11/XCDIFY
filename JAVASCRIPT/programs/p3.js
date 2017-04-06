// program to print vowels in a string

var a="aditya";
var b=vowel(a);

console.log(l);

function vowel(s)
{
	var l=s.length;
	for(var i=0;i<=l;i++)
	{
		if(s.charAt(i)=='a'||s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u')
		{
			console.log("the vowels are : " +s.charAt(i));
		}
	}
}
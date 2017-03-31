

function vowel(str1)
{
    var i;
    for(i=0;i<=l;i++)
        {
            if(str1.charAt(i) == 'a' || str1.charAt(i) == 'e' ||str1.charAt(i) == 'i'||str1.charAt(i) == 'o'||str1.charAt(i) == 'u')
                {
                    console.log("the vowels are " +str1.charAt(i));
                }
        }
}

var st = prompt("enter a string");
var l = st.length;
vowel(st);
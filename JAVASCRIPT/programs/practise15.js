var p=[8,3,5,2,10,9,15,14,20,19];
for(i=0;i<p.length-1;i++)
{
    if(p[i]>p[i+1])
    {
        t=p[i+1];
        p[i+1]=p[i];
        p[i]=t;
i=i-2;
    }
    
}
console.log(p);

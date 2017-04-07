def reverse_demo(string):
    begin=0
    end=len(string)-1
    strlist=[i for i in string]
    while(begin < end):
        temp=strlist[begin]
        strlist[begin]=strlist[end]
        strlist[end]=temp
    return "".join(strlist)
print(reverse_demo("flash"))

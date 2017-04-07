def sqrt(x):
    guess=x
    i=0

    while guess*guess !=x and i<20:
        guess=(guess+x/guess)/2.0
        i+=1
    return guess

try:
    print(sqrt(9))
    print(sqrt(25))

except Exception as e:
    print(str(e))
    

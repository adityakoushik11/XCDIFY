# variable scopes

count=0

def show_count(count):
    b=count
    print(b)

def set_count(c):
    global count
    count=c
    print(count)

set_count(10)
show_count(count)

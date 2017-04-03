class Person:
    def __init__(self,name):
        self.name=name
    def display(self):
        print("HELLO " +self.name)

p1=Person("Tiger")
print(p1)
p1.display()
p2=Person("lion")
p2=p1
print(p2)

print(p2 is p1)
print(id(p1), id(p2))

print(id(self))

class ClassRoom:
    def __init__(self):
        self._people=[]

    def addPeople(self,person):
        self._people.append(person)

    def removePeople(self,person):
        self._people.remove(person)

    def greet(self):
        for person in self._people:
            person.display()




class Person:
    def __init__(self,name):
        self.name=name
        print(id(self))
    
    def display(self):
        print("hello " +self.name)

room = ClassRoom()
room.addPeople(Person("aditya"))
room.addPeople(Person("koushik"))
room.greet()

print(id(room))

        

        


        

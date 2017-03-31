import random
print("hello world")
print("enter tour favorite number : ")
number = input()
print("your favorite number is : " + number)

minNumber = 1
maxNumber = 100
magicNumber = random.randint(minNumber, maxNumber)
message = "your magic number is between {0} and {1}"
print(message.format(minNumber, maxNumber))



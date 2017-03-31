import random

print("enter a number : ")
number = input()
print("the number is : " + number)

minNumber = 1
maxNumber = 100

magicNumber = random.randint(minNumber, maxNumber)

found = False

while not found:
    print("Guess the number!!! : ")
    guess = int(input())
    if guess == magicNumber:
        found = True
    if guess < magicNumber:
        print("too low!! ")
    if guess > magicNumber:
        print("too high")
print("you got it!!!")
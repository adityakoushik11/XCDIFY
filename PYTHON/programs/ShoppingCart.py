class ShoppingCart:
    def __init__(self):
        self._cart=[]

    def addToCart(self,item):
        self._cart.append(item)

    def deleteFromCart(self,item):
        self._cart.remove(item)

    def displayCart(self):
        for item in self._cart:
            print(item)

cart=ShoppingCart()
cart.addToCart("apple")
cart.addToCart("mango")
cart.addToCart("papaya")
cart.addToCart("watermelon")

cart.displayCart()

cart.deleteFromCart("papaya")
cart.displayCart()

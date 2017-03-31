var animal={
    name:"tiger",
    type:"wild",
    
    typeDisp:function()
    {
        return this.type;
    }
};

var forest=Object.create(animal);
forest.typeDisp();
console.log(forest.type);
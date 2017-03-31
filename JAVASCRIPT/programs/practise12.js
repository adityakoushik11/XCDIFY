// GETTER AND SETTER

var cat={ name: { first:"fliffy", last:"scratchy"}, color:"white"};
console.log(cat.fullname);

Object.defineProperty(cat,"fullname",
                      {
                        get:function()
                        {
                            return this.name.first +" "+ this.name.last;
                        },
                        set:function(value)
                        {
                            var namePart=value.split(" ");
                            this.name.first= namePart[0];
                            this.name.last=namePart[1];
                        }
                      });
cat.fullname=" muffin top";
alert(cat.fullname);

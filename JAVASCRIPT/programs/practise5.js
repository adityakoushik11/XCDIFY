var cat=Object.create(Object.prototype,
                      {
                        name: {
                            value:"fliffy",
                            enumerable:true,
                            writable:true,
                            configurable:true
                        },
                        color: {
                            value:"white",
                            enumerable:true,
                            writable:true,
                            configurable:true
                        }
                      });
console.log("name of the cat is " +cat.name);
console.log("color of the cat is " +cat.color);
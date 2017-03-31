var human={
    name:"aditya",
    height:5.10,
    hairColor:"black"
};

console.log(Object.getOwnPropertyDescriptor(human,"name"));
console.log(Object.hasOwnProperty("name"));
console.log(Object.getOwnPropertyDescriptors(human));

function foo()
{
    console.log("hi");
}

function bar()
{
    console.log("hello");
}
bar.prototype=Object.create(foo.prototype);
console.log(foo.prototype.isPrototypeOf(bar));
console.log(Object.prototype.isPrototypeOf(bar));

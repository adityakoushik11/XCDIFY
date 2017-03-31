// selector in jquery-3

var a=$('div');
a;                 // selector is used to find a specific part on the page

var buttons=$('button');
buttons;  //searches for all the buttons present on the page

var z=$('a[href^="http://"]');
z;   //searches for external links in anchor tag

// HTML literals

var b=$('<div> THIS IS A DIV </div>');
b;

// using HTML literal we can create new elements in memory and work on them using JQUERY

var x=$(['<span> one </span> , <span> two </span>']);
x;

//DOM elements

var z1=$(document.getElementById('name')); // the document.getElementById() methos return the element with the specified ID
z1;

var z2=$(document.querySelector('h2')); //it returns the first element that matches the specified CSS selector
z2;

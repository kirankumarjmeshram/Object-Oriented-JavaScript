# Object-Oriented-JavaScript
Object-Oriented Programming in JavaScript

# Created By Udacity

## Objects
 The object is one of the most important data structures in JavaScript. After all, you're currently taking an entire course on object-oriented programming!

 Fundamentally, an object is a collection of associated key/value pairs. We create an object with curly brackets (i.e., { and }). Here's a variable called myObject, which is assigned to an empty object:
    
    const myObject = {};
 While elements in arrays are referenced by a numeric index, keys in an object must be named explicitly, like color or year. Check out the following example:

~~~ const car = {
  color: 'red',
  year: 1992,
  isPreOwned: true
}; 

Let's break this down and see what's going on:

- The variable that is assigned to the object is named car.
- Curly brackets are used to define the car object.
- Individual keys (e,g, color) are associated with a single value ('red' in this case). These key/value pairs are connected by a colon (:).
- Each distinct key/value pair, known as a property of that object, is separated from other properties by a comma (,). The car object therefore contains three properties.
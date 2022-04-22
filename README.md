# Object-Oriented-JavaScript
Object-Oriented Programming in JavaScript

# Created By Udacity



## 1. Introduction
### Objects
 The object is one of the most important data structures in JavaScript. After all, you're currently taking an entire course on object-oriented programming!

 Fundamentally, an object is a collection of associated key/value pairs. We create an object with curly brackets (i.e., { and }). Here's a variable called myObject, which is assigned to an empty object:
    
    const myObject = {};
 While elements in arrays are referenced by a numeric index, keys in an object must be named explicitly, like color or year. Check out the following example:

 ``` 
 const car = {
  color: 'red',
  year: 1992,
  isPreOwned: true
}; 
```



Let's break this down and see what's going on:

- The variable that is assigned to the object is named car.
- Curly brackets are used to define the car object.
- Individual keys (e,g, color) are associated with a single value ('red' in this case). These key/value pairs are connected by a colon (:).
- Each distinct key/value pair, known as a property of that object, is separated from other properties by a comma (,). The car object therefore contains three properties.

### Summary
   In JavaScript, an object is an unordered collection of properties. Each property consists of a key/value pair, and can reference either a primitive (e.g., strings, numbers, booleans, etc.) or another object. Unlike elements in an array, which are accessed by a numeric index, properties in objects are accessed by their key name using either square bracket notation or dot notation. For a closer look at object fundamentals, check out Intro to JavaScript linked below.

   Now that we know how to read existing properties in an object, how do we go about creating new properties? What about modifying existing properties, or even adding and removing properties altogether? We'll answer all this and more in the very next section!

   ## 2 Create and Modify Properties

   ### Creating Objects

   To create a new, blank (i.e., “empty”) object, you can use object literal notation, or the Object() constructor function. If you're not familiar with constructor functions, no need to worry! We'll jump into them in-depth in Lesson 3. For now, just know that the following two expressions are equivalent:

   ```
   // Using literal notation:

const myObject = {};

// Using the Object() constructor function:

const myObject = new Object();
   ```

While both methods ultimately return an object without properties of its own, the Object() constructor function is a bit slower and more verbose. As such, the recommended way to create new objects in JavaScript is to use literal notation.

### Modifying Properties
Keep in mind that data within objects are mutable, meaning that data can be changed. There are a few exceptions to this, but for now, let's see how we can modify/reassign existing properties in an object.

Consider the following cat object:
```
const cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};
```
 Now, let's go ahead change it up a bit!
```
cat.age += 1;

cat.age;
// 3


cat.name = 'Bambi';

cat.name;
// 'Bambi'
```
After incrementing the value of the age property by 1, and reassigning name's value to 'Bambi', our cat object now looks like:

```
{
  age: 3,
  name: 'Bambi',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};
```

### Adding Properties
Properties can be added to objects simply by specifying the property name, then giving it a value. Let's start off with a blank object, then add two properties:

```
const printer = {};

printer.on = true;
printer.mode = 'black and white';
```
The above example uses dot notation to add properties, but keep in mind that square bracket notation works just as well:

```
printer['remainingSheets'] = 168;
```
Likewise, we can add a method to the printer object in a similar manner. This time, the value of the property is an anonymous (i.e., unnamed) function:

```
printer.print = function () {
  console.log('The printer is printing!');
};
```
Great! The complete printer object now looks like the following:

```
{
  on: true,
  mode: 'black and white',
  remainingSheets: 168,
  print: function () {
    console.log('The printer is printing!');
  }
}
```

### Removing Properties

Recall that since objects are mutable, not only can we modify existing properties (or even add new ones) -- we can also delete properties from objects.

Say that the printer object above actually doesn't have any modes (i.e., 'black and white', 'color', etc.). We can go ahead and remove that property from printer using the delete operator.

```
delete printer.mode;

// true
```
Note that delete directly mutates the object at hand. If we try to access a deleted property, the JavaScript interpreter will no longer be able to find the mode property because the mode key (along with its value, true) have been deleted:

```
printer.mode;

// undefined
```

### Passing an Object

On the other hand, objects in JavaScript are mutable. If you pass an object into a function, Javascript passes a reference to that object. Let's see what happens if we pass an object into a function and then modify a property:

```
let originalObject = {
  favoriteColor: 'red'
};

function setToBlue(object) {
  object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor;
// 'blue'
```
In the above example, originalObject contains a single property, favoriteColor, which has a value of 'red'. We pass originalObject into the setToBlue() function and invoke it. After accessing originalObject's favoriteColor property, we see that the value is now 'blue'!

How did this happen? Well, since objects in JavaScript are passed by reference, if we make changes to that reference, we're actually directly modifying the original object itself!

What's more: the same rule applies when re-assigning an object to a new variable, and then changing that copy. Again, since objects are passed by reference, the original object is changed as well. Let's take a look at this more closely with another example.

Consider this iceCreamOriginal object, which shows the amount of ice cream cones each instructor has eaten:

```
const iceCreamOriginal = {
  Andrew: 3,
  Richard: 15
};
```
Let's go ahead and make assign a new variable to iceCreamOriginal. We'll then check the value of its Richard property:

```
const iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richard;
// 15
```
As expected, the expression iceCreamCopy.Richard; returns 15 (i.e., it is the same value as the Richard property in iceCreamOriginal). Now, let's change the value in the copy, then check the results:

```
iceCreamCopy.Richard = 99;

iceCreamCopy.Richard;
// 99

iceCreamOriginal.Richard;
// 99
```
Since objects are passed by reference, making changes to the copy (iceCreamCopy) has a direct effect on the original object (iceCreamOriginal) as well. In both objects, the value of the Richard property is now 99.

### Comparing an Object with Another Object
On the topic of references, let's see what happens when we compare one object with another object. The following objects, parrot and pigeon, have the same methods and properties
```
const parrot = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

const pigeon = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};
```
Naturally, one might expect the parrot object and pigeon object to be equal. After all, both objects look exactly the same! Let's compare parrot and pigeon to find out:

```
parrot === pigeon;

// false
```
What's going on here? As it turns out, the expression will only return true when comparing two references to exactly the same object. Using what we now know about passing objects, let's confirm this. To start off, let's create a new variable, myBird, and assign it to one of the objects above:

```
const myBird = parrot;
```
As we've just learned, myBird not only refers to the same object as parrot -- they are the same object! If we make any updates to myBird's properties, parrot's properties will be updated with exactly the same changes as well. Now, the comparison will return true:

```
myBird === parrot;

// true
```

## Summery
Objects are commonly created with literal notation, and can include properties that point to functions called methods. Methods are accessed the same way as other properties of objects, and can be invoked the same way as regular functions, except they automatically have access to the other properties of their parent object.

By default, objects are mutable (with a few exceptions), so data within them can be altered. New properties can be added, and existing properties can be modified by simply specifying the property name and assigning (or re-assigning) a value. Additionally, properties and methods of an object can be deleted as well with the delete operator, which directly mutates the object.

We've modified objects quite a bit in this section, and even added new methods into them. In the very next section, we'll take a closer look at invoking these methods, as well as how these methods can directly access and modify an object itself!




## 3 Function VS Method
At this point, we've mostly seen objects with properties that behave more like attributes. That is, properties such as color or type are data that describe an object, but they don't "do" anything. We can extend functionality to objects by adding methods to them.

Say that we have a function, sayHello(), which simply logs a message to the console:
```
function sayHello () {
  console.log('Hi there!');
}
```
Now, say that we also have a developer object with a single property, name:
```
const developer = {
  name: 'Andrew'
};
```
If we want to add the sayHello() function into the developer object, we can add the same way as we add other new properties: by providing property name, then giving it a value. This time, the value of the property is a function!
```
developer.sayHello = function () {
  console.log('Hi there!');
};
```
This is how the updated developer object looks:
```
{
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  }
}
```
So now that a sayHello property has been defined, how do we go about calling (i.e., invoking) its referenced function?

### Calling Methods

We can access a function in an object using the property name. Again, another name for a function property of an object is a method. We can access it the same way that we do with other properties: by using dot notation or square bracket notation. Let's take a look back at the updated developer object above, then invoke its sayHello() method:

```
const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  }
};
```
```
developer.sayHello();
// 'Hi there!'

developer['sayHello']();
// 'Hi there!'
```
ust like calling a function, an object's method is called by adding parentheses at the end of the method's name. Note that both dot notation and square bracket notation return the same result!

### Passing Arguments Into Methods
If the method takes arguments, you can proceed the same way, too:
```
const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  },
  favoriteLanguage: function (language) {
    console.log(`My favorite programming language is ${language}`);
  }
};


developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'
```
A method is a property of an object whose value is a function. Methods are called on objects in the following format: object.method().

### 💡 Call Methods by Property Name 💡

We've been using anonymous functions (i.e., functions without a name) for object methods. However, naming those functions is still valid JavaScript syntax. Consider the following object, greeter:
```
const greeter = {
  greet: function sayHello() {
    console.log('Hello!');
  }
};
```
Note that the greet property points to a function with a name: sayHello. Whether this function is named or not, greet is invoked the same way:

```
greeter.greet();

// 'Hello!'
```
Named functions are great for a smoother debugging experience, since those functions will have a useful name to display in stack traces. They're completely optional, however, and you'll often read code written by developers who prefer one way or the other.

### A  Method Can Access the Object it was Called On









# Object-Oriented-JavaScript
Object-Oriented Programming in JavaScript

# Created By Udacity


## LESSION 1
# Objects in Depth
## 1. Introduction
### Objects
 The object is one of the most important data structures in JavaScript. After all, you're currently taking an entire course on object-oriented programming!

 Fundamentally, an object is a collection of associated key/value pairs. We create an object with curly brackets (i.e., { and }). Here's a variable called myObject, which is assigned to an empty object:
 ```js   
    const myObject = {};
  ```
 While elements in arrays are referenced by a numeric index, keys in an object must be named explicitly, like color or year. Check out the following example:

 ```js 
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
``` js
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
```js
cat.age += 1;

cat.age;
// 3


cat.name = 'Bambi';

cat.name;
// 'Bambi'
```
After incrementing the value of the age property by 1, and reassigning name's value to 'Bambi', our cat object now looks like:

```js
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

```js
const printer = {};

printer.on = true;
printer.mode = 'black and white';
```
The above example uses dot notation to add properties, but keep in mind that square bracket notation works just as well:

```js
printer['remainingSheets'] = 168;
```
Likewise, we can add a method to the printer object in a similar manner. This time, the value of the property is an anonymous (i.e., unnamed) function:

```js
printer.print = function () {
  console.log('The printer is printing!');
};
```
Great! The complete printer object now looks like the following:

```js
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

```js
delete printer.mode;

// true
```
Note that delete directly mutates the object at hand. If we try to access a deleted property, the JavaScript interpreter will no longer be able to find the mode property because the mode key (along with its value, true) have been deleted:

```js
printer.mode;

// undefined
```

### Passing an Object

On the other hand, objects in JavaScript are mutable. If you pass an object into a function, Javascript passes a reference to that object. Let's see what happens if we pass an object into a function and then modify a property:

```js
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

```js
const iceCreamOriginal = {
  Andrew: 3,
  Richard: 15
};
```
Let's go ahead and make assign a new variable to iceCreamOriginal. We'll then check the value of its Richard property:

```js
const iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richard;
// 15
```
As expected, the expression iceCreamCopy.Richard; returns 15 (i.e., it is the same value as the Richard property in iceCreamOriginal). Now, let's change the value in the copy, then check the results:

```js
iceCreamCopy.Richard = 99;

iceCreamCopy.Richard;
// 99

iceCreamOriginal.Richard;
// 99
```
Since objects are passed by reference, making changes to the copy (iceCreamCopy) has a direct effect on the original object (iceCreamOriginal) as well. In both objects, the value of the Richard property is now 99.

### Comparing an Object with Another Object
On the topic of references, let's see what happens when we compare one object with another object. The following objects, parrot and pigeon, have the same methods and properties
```js
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

```js
parrot === pigeon;

// false
```
What's going on here? As it turns out, the expression will only return true when comparing two references to exactly the same object. Using what we now know about passing objects, let's confirm this. To start off, let's create a new variable, myBird, and assign it to one of the objects above:

```js
const myBird = parrot;
```
As we've just learned, myBird not only refers to the same object as parrot -- they are the same object! If we make any updates to myBird's properties, parrot's properties will be updated with exactly the same changes as well. Now, the comparison will return true:

```js
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
```js
function sayHello () {
  console.log('Hi there!');
}
```
Now, say that we also have a developer object with a single property, name:
```js
const developer = {
  name: 'Andrew'
};
```
If we want to add the sayHello() function into the developer object, we can add the same way as we add other new properties: by providing property name, then giving it a value. This time, the value of the property is a function!
```js
developer.sayHello = function () {
  console.log('Hi there!');
};
```
This is how the updated developer object looks:
```js
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

```js
const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  }
};
```
```js
developer.sayHello();
// 'Hi there!'

developer['sayHello']();
// 'Hi there!'
```
ust like calling a function, an object's method is called by adding parentheses at the end of the method's name. Note that both dot notation and square bracket notation return the same result!

### Passing Arguments Into Methods
If the method takes arguments, you can proceed the same way, too:
```js
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
```js
const greeter = {
  greet: function sayHello() {
    console.log('Hello!');
  }
};
```
Note that the greet property points to a function with a name: sayHello. Whether this function is named or not, greet is invoked the same way:

```js
greeter.greet();

// 'Hello!'
```
Named functions are great for a smoother debugging experience, since those functions will have a useful name to display in stack traces. They're completely optional, however, and you'll often read code written by developers who prefer one way or the other.

### A  Method Can Access the Object it was Called On

Recall that an object can contain data and the means to manipulate that data. But just how can an object reference its own properties, much less manipulate some of those properties itself? This is all possible with the this keyword!


Let's make sure we're still on the same page! Write an expression that invokes the function referenced by the tree object's growOneFoot property:
```js
const tree = {
  type: 'redwood',
  leaves: 'green',
  height: 80,
  age: 15,
  growOneFoot: function () {
    this.height += 1;
  }
};
tree.growOneFoot()
```
```js
/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/

const chameleon = {
    color : "green",
    changeColor  : function () {
        if(this.color === "green"){
              this.color = 'pink';
        }else if(this.color === 'pink'){
            this.color = "green";
        }
      
    }
}

chameleon.changeColor ()
console.log(chameleon.color)
```

### summery
A method is a function property of an object. It is accessed the same way as any other property of the object (i.e., using dot notation or square bracket notation), and is invoked the same way as a regular function outside of an object (i.e., adding parentheses to the end of the expression).

Since an object is a collection of data and the means to operate on that data, a method can access the object it was called on using the special this keyword. The value of this is determined when a method is invoked, and its value is the object on which the method was called. Since this is a reserved word in JavaScript, its value cannot be used as an identifier. Feel free to check out the links below for an additional look at methods and their relationship with this.

We've spent a bit of time on this inside objects, but did you know that the value of this can have different meanings outside an object? In the next section, we'll take a close look at globals, their relationship with this, and the implications of using the


## 4 Beware of Globals
### this and Function Invocation

Let's compare the code from the chameleon object with the whoThis() code.
```js
const chameleon = {
  eyes: 2,
  lookAround: function () {
     console.log(`I see you with my ${this.eyes} eyes!`);
  }
};
```
```js
chameleon.lookAround();
function whoThis () {
  this.trickyish = true
}

whoThis();
```
### this in the Function/Method
Before we dive into how this all works, take a look at the use of this inside both of these code snippets:
```js
// from the chameleon code:
console.log(`I see you with my ${this.eyes} eyes!`);

// from the whoThis() code:
this.trickyish = true  
```
There is some other code around them, but both of them have the format this.<some-identifier>. For our purposes of discovering the value of this, it does not matter that in the chameleon code, we're using this to retrieve a property, while in the whoThis() code, we're using this to set a property.

So, in both of these cases, the use of this is virtually identical.

### Compare the Structures of the Function/Method
Now, I want you to pay attention to the differences in structure of how the two snippets of code are invoked. The lookAround() code is a method because it belongs to an object. Since it's a method, it's invoked as a property on the chameleon object:
```js
chameleon.lookAround();
```
Now compare that with the whoThis() code. whoThis() is not a method; it's a plain, old, regular function. And look at how the whoThis() function is invoked:
```js
whoThis();
```
Just like every normal function is invoked; it's just the name of the function and the parentheses (there's no object and no dot in front of it).

### this and Invocation
How the function is invoked determines the value of this inside the function. ← That sentence is really important, so read that two more times...we'll wait!

Because .lookAround() is invoked as a method, the value of this inside of .lookAround() is whatever is left of the dot at invocation. Since the invocation looks like:
```js
chameleon.lookAround();
```
The chameleon object is left of the dot. Therefore, inside the .lookAround() method, this will refer to the chameleon object!

Now let's compare that with the whoThis() function. Since it is called as a regular function (i.e., not called as an method on an object), its invocation looks like:
```js
whoThis();
```
Well, there is no dot. And there is no object left of the dot. So what is the value of this inside the whoThis() function? This is an interesting part of the JavaScript language.

When a regular function is invoked, the value of this is the global window object.

### The window Object
If you haven't worked with the window object yet, this object is provided by the browser environment and is globally accessible to your JavaScript code using the identifier, window. This object is not part of the JavaScript specification (i.e., ECMAScript); instead, it is developed by the W3C.

This window object has access to a ton of information about the page itself, including:

- The page's URL (window.location;)
- The vertical scroll position of the page (window.scrollY')
- scrolling to a new location (window.scroll(0, window.scrollY + 200); to scroll 200 pixels down from the current location)
- Opening a new web page (window.open("https://www.udacity.com/");)


### Global Variables are Properties on window
Since the window object is at the highest (i.e., global) level, an interesting thing happens with global variable declarations. Every variable declaration that is made at the global level (outside of a function) automatically becomes a property on the window object!

Here we can see that the currentlyEating variable is set to 'ice cream'. Then, we immediately see that the window now has a currentlyEating property! Checking this property against the currentlyEating variable shows us that they are identical.
```
var currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating
// true  bcz of var
```

### Globals and var, let, and const
The keywords var, let, and const are used to declare variables in JavaScript. var has been around since the beginning of the language, while let and const are significantly newer additions (added in ES6).

Only declaring variables with the var keyword will add them to the window object. If you declare a variable outside of a function with either let or const, it will not be added as a property to the window object.
```js
let currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating 
// false!
```
### Avoid Globals
We've seen that declaring global variables and functions add them as properties to the window object. Globally-accessible code sounds like something that might be super helpful, right? I mean, wouldn't it be great if you could always be within arms reach of some ice cream (or is that just my lifelong dream)?

Counterintuitively, though, global variables and functions are not ideal. There are actually a number of reasons why, but the two we'll look at are:

- Tight coupling
- Name collisions

### Tight Coupling
Tight coupling is a phrase that developers use to indicate code that is too dependent on the details of each other. The word "coupling" means the "pairing of two items together." In tight coupling, pieces of code are joined together in a way where changing one unintentionally alters the functioning of some other code:
```js
var instructor = 'Richard';

function richardSaysHi() {
  console.log(`${instructor} says 'hi!'`);
}
```
In the code above, note that the instructor variable is declared globally. The richardSaysHi() function does not have a local variable that it uses to store the instructor's name. Instead, it reaches out to the global variable and uses that. If we refactored this code by changing the variable from instructor to teacher, this would break the richardSaysHi() function (or we'd have to update it there, too!). This is a (simple) example of tightly-coupled code.

### Name Collisions


A name collision occurs when two (or more) functions depend on a variable with the same name. A major problem with this is that both functions will try to update the variable and or set the variable, but these changes are overridden by each other!

Let's look at an example of name collision with this DOM manipulation code:
```js
let counter = 1;

function addDivToHeader () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('header');
  headerSection.appendChild(newDiv)
}

function addDivToFooter() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('footer');
  headerSection.appendChild(newDiv)
}
```
In this code, we have an addDivToHeader() function and a addDivToFooter() function. Both of these functions create a <div> element and increment a counter variable.

This code looks fine, but if you try running this code and adding a few <div>s to the <header> and <footer> elements, you'll find that the numbering will get off! Both addDivToHeader() and addDivToFooter() expect a global counter variable to be accessible to them -- not change out from under them!

Since both functions increment the counter variable, if the code alternates between calling addDivToHeader() and addDivToFooter(), then their respective <div>s will not have numerically ascending numbers. For example, if we had the following calls:
```js
addDivToHeader();
addDivToHeader();

addDivToFooter();

addDivToHeader();
```
The developer probably wanted the <header> to have three <div> elements with the numbers 1, 2, and 3 and the <footer> element to have a single <div> with the number 1. However, what this code will produce is a <header> element with three <div> but with the numbers 1, 2, and 4 (not 3) and a <footer> element with the number 3...these are very different results. But it's happening because both functions depend on the counter variable and both update it.

So what should you do instead? You should write as few global variables as possible. Write your variables inside of the functions that need them, keeping them as close to where they are needed as possible. Now, there are times when you'll need to write global variables, but you should only write them as a last resort.

### Summary
The window object is provided by the browser and is not part of the JavaScript language or specification. Any global variable declarations (i.e., those that use var) or global function declarations are added as properties to this window object. Excessive use of global variables is not a good practice, and can cause unexpected problems to accurately-written code.

Whether you're working with the window object, or with an object you create yourself, recall that all objects are made up of key/value pairs. In the next section, we'll check out how to extract these individual keys or values!


## 5 Extracting Properties and Values
### Object Methods
Do you remember earlier when we used the Object() constructor function to create (i.e., instantiate) new objects with the new keyword?
```js
const myNewFancyObject = new Object();
```
The Object() function actually includes a few methods of its own to aid in the development of your applications. These methods are:

Object.keys()
Object.values()
Whether you're building logic in your code, or just writing a utility "helper" function, feel free to use these methods as necessary. Let's see how each of these work!

### Object.keys() and Object.values()
At its core, an object is just a collection of key/value pairs. What if we want to extract only the keys from an object? Say we have this object representing a real-life dictionary:
```js
const dictionary = {
  car: 'automobile',
  apple: 'healthy snack',
  cat: 'cute furry animal',
  dog: 'best friend'
};
```
Having a collection of just the words (i.e., the dictionary object's keys) may be particularly useful. While we could use a for...in loop to iterate through an object and build our own list of keys, it can get a bit messy and verbose. Thankfully, JavaScript provides an abstraction just for this!

When Object.keys() is given an object, it extracts just the keys of that object, then returns those keys in an array:
```js
Object.keys(dictionary);

// ['car', 'apple', 'cat', 'dog']
```
So Object.keys() gives returns an array of the provided object's property names. Likewise, if we want a list of the values of an object, we can use Object.values():
```js
Object.values(dictionary);

// ['automobile', 'healthy snack', 'cute furry animal', 'best friend']
```

Summary
The Object() constructor function has access to several methods to aid in development. To extract property names and values from an object, we can use:

- Object.keys() returns an array of a given object's own keys (property names).
- Object.values() returns an array of a given object's own values (property values).

## LESSION 2
# Function Runtime
## 1 Introduction 
Before we jump into the intro, take a quick glance at the following code:
```js
function greet() {
  console.log('Functions are cool!');
}
```
### Functions are First-Class Functions
In JavaScript, functions are first-class functions. This means that you can do with a function just about anything that you can do with other elements, such as numbers, strings, objects, arrays, etc. JavaScript functions can:

1. Be stored in variables
2. Be returned from a function.
3. Be passed as arguments into another function.
Note that while we can, say, treat a function as an object, a key difference between a function and an object is that functions can be called (i.e., invoked with ()), while regular objects cannot.

In many ways, a function in JavaScript can be treated as a value. Returning it from a function, storing it in a variable, and even passing it in as an argument into another function is perfectly allowed!

### Functions Can Return Functions
Recall that a function must always return a value. Whether the value is explicitly specified in a return statement (e.g., returning a string, boolean, array, etc.), or the function implicitly returns undefined (e.g., a function that simply logs something to the console), a function will always return just one value.

Since we know that functions are first-class functions, we can treat a function as a value and just as easily return a function from another function! A function that returns another function is known as higher-order function. Consider this example:
```js
function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}
```
If alertThenReturn() is invoked in a browser, we'll first see an alert message that says 'Message 1!', followed by the alertThenReturn() function returning an anonymous function. However, we don't actually see an alert that says 'Message 2!', since none of the code from the inner function is executed. How do we go about executing the returned function?

Since alertThenReturn() returns that inner function, we can assign a variable to that return value:
```js
const innerFunction = alertThenReturn();
```
We can then use the innerFunction variable like any other function!
```js
innerFunction();

// alerts 'Message 2!'
```
Likewise, this function can be invoked immediately without being stored in a variable. We'll still get the same outcome if we simply add another set of parentheses to the expression alertThenReturn();:
```
alertThenReturn()();

// alerts 'Message 1!' then alerts 'Message 2!'
```
Notice the double set of parentheses (i.e. ()()) in that function call! The first pair of parentheses executes the alertThenReturn() function. The return value of this invocation is a function, which then gets invoked by the second pair of parentheses!

### Summery 
In the JavaScript language, functions are first-class functions. This means that we can do with functions just about everything that we can do with other elements in JavaScript, such as strings, arrays, or numbers. JavaScript functions can:

Be stored in variables
Be returned from a function.
Be passed as arguments into another function.
We've seen quite a few examples of the first two in the list, but what about passing a function as an argument into another function? Since this is such an important and common pattern in JavaScript, we'll take a deep dive in the next section!

## 3 Callbacks
### Callback Functions
Recall that JavaScript functions are first-class functions. We can do with functions just about everything we can do with other values -- including passing them into other functions! A function that takes other functions as arguments (and/or returns a function, as we learned in the previous section) is known as a higher-order function.**A function that is passed as an argument into another function is called a callback function**.

We'll be focusing on callbacks in this section. Callback functions are great because they can delegate calling functions to other functions. They allow you to build your applications with composition, leading to cleaner and more efficient code.

```js
function callAndAdd(n, callbackFunction) {
  return n + callbackFunction();
}

function returnsThree() {
  return 3;
}

let result = callAndAdd(2, returnsThree);

console.log(result);
// 5
```
Callback functions aren't exclusive to JavaScript, but they're incredibly common and crucial for many of the patterns you'll read and write!

### Array Methods
Where have you probably seen callback functions used? In array methods! Functions are commonly passed into array methods and called on elements within an array (i.e., the array on which the method was called).

Let's check out a couple in detail:

- forEach()
- map()
- filter()


### forEach()
Array's forEach() method takes in a callback function and invokes that function for each element in the array. In other words, forEach() allows you to iterate (i.e., loop) through an array, similar to using a for loop. Check out its signature:
```js
array.forEach(function callback(currentValue, index, array) {
    // function code here
});
```
The callback function itself receives the arguments: the current array element, its index, and the entire array itself.

Let's say we have a simple function, logIfOdd(), that takes in a single number and logs it to the console if that number is an odd number:
```js
function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
}

logIfOdd(2);
// (nothing is logged)

logIfOdd(3);
// 3
```
We can iterate through the above array with forEach() and simply pass it the logIfOdd() function!

```js
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});

// 1
// 5
// 3
```
Keep in mind that it's quite common to pass an anonymous function as an argument in forEach() as well:
```js
[1, 5, 2, 4, 6, 3].forEach(function (n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});

// 1
// 5
// 3
```
Alternatively, it's possible to simply pass in just the name of the function as well (i.e., assuming the function was already defined, of course).
```js
[1, 5, 2, 4, 6, 3].forEach(logIfOdd);

// 1
// 5
// 3
```

### map()
Array's map() method is similar to **forEach() in that it invokes a callback function for each element in an array** . However, **map() returns a new array based on what's returned from the callback function**. Check out the following:

```js
const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function(name) {
  return name.length;
});
```
Let's go over what's happening here. The map() method works on arrays, so we have to have an array to start with:
```
const names = ['David', 'Richard', 'Veronika'];
```
We call map() on the names array and pass it an anonymous function as an argument:
```js
names.map(function(name) {
  return name.length;
});
```

The function that's passed to map() gets called for each item in the names array! The function receives the first name in the array, stores it in the name variable and returns its length. Then it does that again for the remaining two names.

**Remember that the key difference between forEach() and map() is that forEach() doesn't return anything, while map() returns a new array with the values that are returned from the function:**
```
const nameLengths = names.map(function(name) {
  return name.length;
});
```
So nameLengths will be a new array: [5, 7, 8]. Again, it is important to understand that **the map() method returns a new array; it does not modify the original array.**



```js
/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(({name,artist,sales})=>{
    return `${name} by ${artist} sold ${sales} copies`
})
console.log(albumSalesStrings)

console.log(albumSalesStrings);

//output
[ '25 by Adele sold 1731000 copies',
  'Views by Drake sold 1608000 copies',
  'Lemonade by Beyonce sold 1554000 copies',
  'Traveller by Chris Stapleton sold 1085000 copies',
  'A Pentatonix Christmas by Pentatonix sold 904000 copies',
  'Hamilton: An American Musical by Original Broadway Cast Recording sold 820000 copies',
  'Blurryface by Twenty One Pilots sold 738000 copies',
  'The Very Best of Prince by Prince sold 668000 copies',
  'Anti by Rihanna sold 603000 copies',
  'Purpose by Justin Bieber sold 554000 copies' ]
```
### Filter

Array's filter() method is similar to the map() method:

- It is called on an array
- It takes a function as an argument
- It returns a new array
The difference is that the function passed to filter() is used as a test, and only items in the array that pass the test are included in the new array. Consider the following example:

```js
const names = ['David', 'Richard', 'Veronika'];

const shortNames = names.filter(function(name) {
  return name.length < 6;
});

console.log(shortNames);
// ['David']
```
```js
/* Using filter()
 
  Using the musicData array and filter():
    - Return only album objects where the album's name is
      10 characters long, 25 characters long, or anywhere in between
    - Store the returned data in a new `results` variable
 
  Note:
    - Do not delete the musicData variable
    - Do not alter any of the musicData content
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter(el =>{
    return (el.name.length >=10 && el.name.length <=25)
});

console.log(results);

/* output 
[ { artist: 'Pentatonix',
    name: 'A Pentatonix Christmas',
    sales: 904000 },
  { artist: 'Twenty One Pilots',
    name: 'Blurryface',
    sales: 738000 },
  { artist: 'Prince',
    name: 'The Very Best of Prince',
    sales: 668000 } ]
    */
```
### Summary
JavaScript functions can take in a variety of different arguments, including strings, numbers, arrays, and objects. Since functions are first-class functions, functions can also be passed as arguments to a given function. Functions that take in other functions as arguments are called higher-order functions. Functions that are passed as arguments to other functions are called callback functions.

Callbacks allow you to pass functions without needing to name them (i.e., anonymous functions), which leads to less variables floating around. They also allow you to delegate calling functions to other functions. Array methods, such as forEach(), map(), and filter(), take advantage of callbacks to execute functions onto a given array's elements. Feel free to check out the list of other array methods listed below.

Now that we know that functions in JavaScript can have access to many different types of variables in its list of arguments -- what else is available for functions to use? That is, what is included in the scope of a function? Let's find out in the next section!

## 4 Scope

If you took Intro to Javascript, you learned about block scope vs. function scope. These determine where a variable can be seen in some code. Computer scientists call this **lexical scope**.

However, there also exists another kind of scope called **runtime scope**. When a function is run, it creates a new runtime scope. This scope represents the context of the function, or more specifically, the set of variables available for the function to use.

### Scope
A function's runtime scope describes the variables available for use inside a given function. The code inside a function has access to:

1. The function's arguments.
2. Local variables declared within the function.
3. Variables from its parent function's scope.
4. Global variables.
Check out the following image that highlights a function's scope, then we'll take a look at a live example.

![](https://video.udacity-data.com/topher/2017/December/5a31c70a_l2-34-scope-image/l2-34-scope-image.png)

The nested child() function has access to all a, b, and c variables. That is, these variables are in the child() function's scope.

```js
const myName = 'Andrew';

function introduceMyself() {
  const you = 'student';

  function introduce() {
    console.log(`Hello, ${you}, I'm ${myName}!`);
  }

  return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'
```
### JavaScript is Function-Scoped
You may be wondering why scope is so heavily associated with functions in JavaScript. Especially if you've had past experience in another programming language, this might seem a bit unusual (e.g., blocks in Ruby have their own scope)!

This is all because variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block. Since entering a function will change scope, any variables defined inside that function are not available outside of that function. On the other hand, if there are any variables defined inside a block (e.g., within an if statement), those variables are available outside of that block.

You may be wondering why scope is so heavily associated with functions in JavaScript. Especially if you've had past experience in another programming language, this might seem a bit unusual (e.g., blocks in Ruby have their own scope)!

This is all because variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block. Since entering a function will change scope, any variables defined inside that function are not available outside of that function. On the other hand, if there are any variables defined inside a block (e.g., within an if statement), those variables are available outside of that block.

```js
var globalNumber = 5;

function globalIncrementer() {
  const localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}
```
In the example above, globalNumber is outside the function; it is a global variable that the globalIncrementer() function has access to. globalIncrementer() simply has a local variable (localNumber) declared within it, then increments globalNumber by 1 before returning the updated value of globalNumber itself.

After calling the function a few times, we see that the value of globalNumber has indeed increased each time:
```js
console.log(globalIncrementer());
// 6

console.log(globalIncrementer());
// 7

console.log(globalIncrementer());
// 8
```

However, when attempting to access localNumber outside of the function, we see a error:
```
console.log(localNumber);

// ReferenceError: localNumber is not defined
```
Because JavaScript is function-scoped, functions have access to all its own variables as well as all the global variables outside of it. For more details on block scoping, check out Further Research at the end of this page.

### 💡 Block-Scoping 💡
ES6 syntax allows for additional scope while declaring variables with the **let and const keywords. These keywords are used to declare block-scoped variables in JavaScript, and largely replace the need for var**.


### Scope Chain
Whenever your code attempts to access a variable during a function call, the JavaScript interpreter will always start off by looking within its own local variables. If the variable isn't found, the search will continue looking up what is called the scope chain. Let's take a look at an example:
```js
function one() {
  two();
  function two() {
    three();
    function three() {
      // function three's code here
    }
  }
}

one();
```
In the above example, when one() is called, all the other nested functions will be called as well (all the way to three()).

You can visualize the scope chain moving outwards starting at the innermost level: from three(), to two(), to one(), and finally to window (i.e., the global/window object). This way, the function three() will not only have access to the variables and functions "above" it (i.e., those of two() and one()) -- three() will also have access to any global variables defined outside one().

Let's now revisit the image from the beginning of this section, and visualize the entire process:

![](https://video.udacity-data.com/topher/2017/December/5a31c70a_l2-42-scope-chain/l2-42-scope-chain.png)

When resolving a variable, the JavaScript engine begins by looking at the nested child function's locally-defined variables. If found, then the value is retrieved; if not, the JavaScript engine continues to looking outward until the variable is resolved. If the JavaScript engine reaches the global scope and is still unable to resolve the variable, the variable is undefined.

### 💡 The Global (window) Object💡
Recall that when JavaScript applications run inside a host environment (e.g., a browser), the host provides a window object, otherwise known as the global object. Any global variables declared are accessed as properties of this object, which represents the outermost level of the scope chain.

### Variable Shadowing
What happens when you create a variable with the same name as another variable somewhere in the scope chain?

J**avaScript won't throw an error or otherwise prevent you from creating that extra variable. In fact, the variable with local scope will just temporarily "shadow" the variable in the outer scope. This is called variable shadowing**. Consider the following example:
```js
let symbol = '¥';

function displayPrice(price) {
  let symbol = '$';
  console.log(symbol + price);
}

displayPrice('80');
// '$80'
```
In the above snippet, note that symbol is declared in two places:

1. Outside the displayPrice() function, as a global variable.
2. Inside the displayPrice() function, as a local variable.
After invoking displayPrice() and passing it an argument of '80', the function outputs '$80' to the console.

How does the JavaScript interpreter know which value of symbol to use? Well, since the variable pointing to '$' is declared inside a function (i.e., the "inner" scope), it will override any variables of the same name that belong in an outer scope -- such as the global variable pointing to '¥'. As a result, '$80' is displayed rather than '¥80'.

All in all, if there are any naming overlaps between variables in different contexts, they are all resolved by moving through the scope chain from inner to outer scopes (i.e., local all the way to global). This way, any local variables that have the same name take precedence over those with a wider scope.
```js
let n = 2;

function myFunction() {
  let n = 8;
  console.log(n);
}

myFunction();
// 8
```
## Summary
When a function is run, it creates its own scope. A function's scope is the set of variables available for use within that function. The scope of a function includes:

The function's arguments.
Local variables declared within the function.
Variables from its parent function's scope.
Global variables.
Variables in JavaScript are also function-scoped. This means that any variables defined inside a function are not available for use outside the function, though any variables defined within blocks (e.g. if or for) are available outside that block.

When it comes to accessing variables, the JavaScript engine will traverse the scope chain, first looking at the innermost level (e.g., a function's local variables), then to outer scopes, eventually reaching the global scope if necessary.

In this section, we've seen quite a few examples of a nested function being able to access variables declared in its parent function's scope (i.e., in the scope in which that function was nested). These functions, combined with the lexical environment it which it was declared, actually have a very particular name: closure. Closures are very closely related to scope in JavaScript, and lead to some powerful and useful applications. We'll take a look at closures in detail next!

## 5 Closures

We just looked at how function scope works and how a scope chain is created. Just to recap: when an identifier (i.e., a variable) is used, the JavaScript engine will check the scope chain to retrieve the value for that identifier. The identifier might be found in the local scope (either in the function or block). If it's not found locally, then it might exist in an outer scope. It'll then keep checking the next outer scope followed by the next outer scope until it reaches the global scope (if necessary).
Identifier lookup and the scope chain are really powerful tools for a function to access identifiers in the code. In fact, this lets you do something really interesting: create a function now, package it up with some variables, and save it to run later. If you have five buttons on the screen, you could write five different click handler functions, or you could use the same code five times with different saved values.

Let's check out an example of a function retaining access to its scope. Consider the remember() function below:
```js
function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );
// 5
```
When the Javascript engine enters remember(), it creates a new execution scope that points back to the prior execution scope. This new scope includes a reference to the number parameter (an immutable Number with the value 5). When the engine reaches the inner function (a function expression), it attaches a link to the current execution scope.

This process of a function retaining access to its scope is called a closure. In this example, the inner function "closes over" number. A closure can capture any number of parameters and variables that it needs. MDN defines a closure as:
When the Javascript engine enters remember(), it creates a new execution scope that points back to the prior execution scope. This new scope includes a reference to the number parameter (an immutable Number with the value 5). When the engine reaches the inner function (a function expression), it attaches a link to the current execution scope.

This process of a function retaining access to its scope is called a closure. In this example, the inner function "closes over" number. A closure can capture any number of parameters and variables that it needs. MDN defines a closure as:
**"the combination of a function and the lexical environment within which that function was declared."** ;
This definition might not make a lot of sense if you don't know what the words "lexical environment" mean. The ES5 spec refers to a lexical environment as:

**"the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code."**

In this case, the "lexical environment" refers the code as it was written in the JavaScript file. As such, a closure is:

- The function itself, and
- The code (but more importantly, the scope chain of) where the function is declared
So looking back at the above example -- after remember(5) is executed and returned, how is the returned function still able to access number's value (i.e., 5)? In this section, we'll investigate how closures allow us to store a snapshot of state at the time the function object is created. 
**Closure is a combination of function and its lexical environment**

```js
function myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

let counter = myCounter();

counter();
// 1

counter();
// 2

counter.count;
// undefined

count;
// undefined
```
### Applications of Closures
To recap, we've seen two common and powerful applications of closures:

1. Passing arguments implicitly.
2. At function declaration, storing a snapshot of scope.

```js
/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/
function expandArray(){
   let myArray = [1, 1, 1];
  
  return function (){
      myArray.push(1);
  
      return myArray
  }
  
}

let abc = expandArray();
console.log(abc()) //[1,1,1,1]
```

### Garbage Collection
JavaScript manages memory with automatic garbage collection. This means that when data is no longer referable (i.e., there are no remaining references to that data available for executable code), it is "garbage collected" and will be destroyed at some later point in time. This frees up the resources (i.e., computer memory) that the data had once consumed, making those resources available for re-use.

Let's look at garbage collection in the context of closures. We know that the variables of a parent function are accessible to the nested, inner function. If the nested function captures and uses its parent's variables (or variables along the scope chain, such as its parent's parent's variables), those variables will stay in memory as long as the functions that utilize them can still be referenced.

As such, referenceable variables in JavaScript are not garbage collected! Let's quickly look back at the myCounter function :
```javascript
function myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}
```

The existence of the nested function keeps the count variable from being available for garbage collection, therefore count remains available for future access. After all, a given function (and its scope) does not end when the function is returned. Remember that functions in JavaScript retain access to the scope that they were created in!

### Summeryy 
A closure refers to the combination of a function and the lexical environment in which that function was declared. Every time a function is defined, closure is created for that function. This is especially powerful in situations where a function is defined within another function, allowing the nested function to access variables outside of it. Functions also keep a link to its parent's scope even if the parent has returned. This prevents data in its parents from being garbage collected.

At this point, we've worked a lot with functions declarations and function expressions. Did you know that you can write functions that can be immediately invoked after they're defined? We'll check out these immediately-invoked function expressions (IIFE's, or iiffy's) in the next section!

## 6 Immediately Invoked Function Expression (IIFE)

### Function Declarations vs. Function Expressions
A **function declaration** defines a function and does not require a variable to be assigned to it. It simply declares a function, and doesn't itself return a value. Here's an example:
```js
function returnHello() {
  return 'Hello!';
}
```
a **function expression** does return a value. Function expressions can be anonymous or named, and are part of another expression's syntax. They're commonly assigned to variables, as well. Here's the same function as a function expression:
```js
// anonymous
const myFunction = function () {
  return 'Hello!';
};

// named
const myFunction = function returnHello() {
  return 'Hello!';
};

```
### Immediately-Invoked Function Expressions: Structure and Syntax

mmediately-Invoked Function Expressions: Structure and Syntax
An immediately-invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. Check out the following example:
```js
(function sayHi(){
    alert('Hi there!');
  }
)();

// alerts 'Hi there!'
```
The syntax might seem a bit odd, but all we're doing is wrapping a function in parentheses, then adding a pair of parentheses at the end of that to invoke it!

### Passing Arguments into IIFE's

Let's look into how we can go about passing arguments into IIFE's. Consider the following example of an anonymous function expression that takes in a single argument:

```js
 (function (name){
    alert(`Hi, ${name}`);
  }
)('Andrew');

// alerts 'Hi, Andrew'
```

The second pair of parentheses not only immediately executes the function preceding it -- it's also the place to put any arguments that the function may need! We pass in the string 'Andrew', which is stored in the function expression's name variable. It is then immediately invoked, alerting the message 'Hi, Andrew' onto the screen.

Here's another example of an IIFE, this time taking two arguments and returning their product:
```js
(function (x, y){
    console.log(x * y);
  }
)(2, 3);

// 6
```
Again -- the arguments passed into the anonymous function (i.e., 2 and 3) belong in trailing set of parentheses.

### IIFE's and Private Scope
One of the primary uses for IIFE's is to create private scope (i.e., private state). Recall that variables in JavaScript are traditionally scoped to a function. Knowing this, we can leverage the behavior of closures to protect variables or methods from being accessed! Consider the following example of a simple closure within an IIFE, referenced by myFunction:
```js
const myFunction = (
  function () {
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();
```
Let's break myFunction down and review the individual parts that make it up:

![](https://video.udacity-data.com/topher/2017/December/5a31c70b_l2-67-iife-with-a-closure/l2-67-iife-with-a-closure.png)

myFunction refers to an IIFE with a locally-defined variable, hi, and a returned function that closes over hi and prints its value to the console.

In the above image, an immediately-invoked function expression is used to immediately run a function. This function runs and returns an anonymous function that is stored in the myFunction variable.

Note that the function that is being returned closes over (i.e., captures) the hi variable. This allows myFunction to maintain a private, mutable state that cannot be accessed outside the function! What's more: because the function expressed is called immediately, the IIFE wraps up the code nicely so that we don't pollute the global scope.

If any of this sounds familiar -- it's because IIFE's are very closely related to everything you've learned about scope and closures!

### IIFE's, Private Scope, and Event Handling
Let's check out another example of an immediately-invoked function expression -- this time in the context of handling an event. Say that we want to create a button on a page that alerts the user on every other click. One way to begin doing this would be to keep track of the number of times that the button was clicked. But how should we maintain this data?

We could keep track of the count with a variable that we declare in the global scope (this would make sense if other parts of the application need access to the count data). However, an even better approach would be to enclose this data in event handler itself!

For one, this approach prevents us from polluting the global with extra variables (and potentially variable name collisions). What's more: if we use an IIFE, we can leverage a closure to protect the count variable from being accessed externally! This prevents any accidental mutations or unwanted side-effects from inadvertently altering the count.

To begin, let's first create an HTML file containing a single button:
```html
<!-- button.html -->

<html>

  <body>

     <button id='button'>Click me!</button>

     <script src='button.js'></script>

  </body>

</html>
```
No surprises here -- just a <button> tag with ID of 'button'. We also reference a button.js file that we're now going to build. Within that file, let's retrieve a reference to that element via its ID, then save that reference to a variable, button:

```js
// button.js

const button = document.getElementById('button');
```
Next, we'll add an event listener to button, and listen for a 'click' event. Then, we'll pass in an IIFE as the second argument:

```js
// button.js

button.addEventListener('click', (function() {
  let count = 0;

  return function() {
    count += 1;

    if (count === 2) {
      alert('This alert appears every other press!');
      count = 0;
    }
  };
})());
```
Quite a bit is going on in the IIFE, so let's break it down!




























































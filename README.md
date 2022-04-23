# Object-Oriented-JavaScript
Object-Oriented Programming in JavaScript

# Created By Udacity


## LESSION 1
# Objects in Depth
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

Recall that an object can contain data and the means to manipulate that data. But just how can an object reference its own properties, much less manipulate some of those properties itself? This is all possible with the this keyword!


Let's make sure we're still on the same page! Write an expression that invokes the function referenced by the tree object's growOneFoot property:
```
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
```
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
```
const chameleon = {
  eyes: 2,
  lookAround: function () {
     console.log(`I see you with my ${this.eyes} eyes!`);
  }
};
```
```
chameleon.lookAround();
function whoThis () {
  this.trickyish = true
}

whoThis();
```
### this in the Function/Method
Before we dive into how this all works, take a look at the use of this inside both of these code snippets:
```
// from the chameleon code:
console.log(`I see you with my ${this.eyes} eyes!`);

// from the whoThis() code:
this.trickyish = true  
```
There is some other code around them, but both of them have the format this.<some-identifier>. For our purposes of discovering the value of this, it does not matter that in the chameleon code, we're using this to retrieve a property, while in the whoThis() code, we're using this to set a property.

So, in both of these cases, the use of this is virtually identical.

### Compare the Structures of the Function/Method
Now, I want you to pay attention to the differences in structure of how the two snippets of code are invoked. The lookAround() code is a method because it belongs to an object. Since it's a method, it's invoked as a property on the chameleon object:
```
chameleon.lookAround();
```
Now compare that with the whoThis() code. whoThis() is not a method; it's a plain, old, regular function. And look at how the whoThis() function is invoked:
```
whoThis();
```
Just like every normal function is invoked; it's just the name of the function and the parentheses (there's no object and no dot in front of it).

### this and Invocation
How the function is invoked determines the value of this inside the function. ← That sentence is really important, so read that two more times...we'll wait!

Because .lookAround() is invoked as a method, the value of this inside of .lookAround() is whatever is left of the dot at invocation. Since the invocation looks like:
```
chameleon.lookAround();
```
The chameleon object is left of the dot. Therefore, inside the .lookAround() method, this will refer to the chameleon object!

Now let's compare that with the whoThis() function. Since it is called as a regular function (i.e., not called as an method on an object), its invocation looks like:
```
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
```
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
```
var instructor = 'Richard';

function richardSaysHi() {
  console.log(`${instructor} says 'hi!'`);
}
```
In the code above, note that the instructor variable is declared globally. The richardSaysHi() function does not have a local variable that it uses to store the instructor's name. Instead, it reaches out to the global variable and uses that. If we refactored this code by changing the variable from instructor to teacher, this would break the richardSaysHi() function (or we'd have to update it there, too!). This is a (simple) example of tightly-coupled code.

### Name Collisions


A name collision occurs when two (or more) functions depend on a variable with the same name. A major problem with this is that both functions will try to update the variable and or set the variable, but these changes are overridden by each other!

Let's look at an example of name collision with this DOM manipulation code:
```
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
```
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
```
const myNewFancyObject = new Object();
```
The Object() function actually includes a few methods of its own to aid in the development of your applications. These methods are:

Object.keys()
Object.values()
Whether you're building logic in your code, or just writing a utility "helper" function, feel free to use these methods as necessary. Let's see how each of these work!

### Object.keys() and Object.values()
At its core, an object is just a collection of key/value pairs. What if we want to extract only the keys from an object? Say we have this object representing a real-life dictionary:
```
const dictionary = {
  car: 'automobile',
  apple: 'healthy snack',
  cat: 'cute furry animal',
  dog: 'best friend'
};
```
Having a collection of just the words (i.e., the dictionary object's keys) may be particularly useful. While we could use a for...in loop to iterate through an object and build our own list of keys, it can get a bit messy and verbose. Thankfully, JavaScript provides an abstraction just for this!

When Object.keys() is given an object, it extracts just the keys of that object, then returns those keys in an array:
```
Object.keys(dictionary);

// ['car', 'apple', 'cat', 'dog']
```
So Object.keys() gives returns an array of the provided object's property names. Likewise, if we want a list of the values of an object, we can use Object.values():
```
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
```
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
```
function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}
```
If alertThenReturn() is invoked in a browser, we'll first see an alert message that says 'Message 1!', followed by the alertThenReturn() function returning an anonymous function. However, we don't actually see an alert that says 'Message 2!', since none of the code from the inner function is executed. How do we go about executing the returned function?

Since alertThenReturn() returns that inner function, we can assign a variable to that return value:
```
const innerFunction = alertThenReturn();
```
We can then use the innerFunction variable like any other function!
```
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

































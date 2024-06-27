// Method Overriding
//  Create a superclass Shape with a method draw(). 
//Extend this class with Circle and Rectangle, each overriding the draw() method. 
//Write a main method to create an array of Shape objects and call draw() on each, demonstrating runtime polymorphism.

class Shape {
  draw() {
    console.log("Drawing a shape...");
  }
}

class Circle extends Shape {
    draw(){
        console.log('drwing a circle...');
    }
}

class Rectangle extends Shape {
    draw(){
        console.log('drwing a Rectangle...');
    }
}


function main() {
  const shapes = [new Circle(), new Rectangle(), new Shape()];
  shapes.forEach(shape => shape.draw())
}

main();
// drwing a circle...
// drwing a Rectangle...
// Drawing a shape...

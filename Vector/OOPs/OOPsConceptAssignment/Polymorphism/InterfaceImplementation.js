// Interface Implementation

//JavaScript does not have interfaces, but you can use classes to achieve similar functionality

// Define an interface Movable with a method move(). 
// Implement this interface in classes Car and Bicycle.
// Write a main method to create objects of both classes and call their move() methods.




class Movable {
    move() {
        throw new Error("This method should be overridden");
    }
}

class Car extends Movable {
    move() {
        console.log("Car is moving");
    }
}

class Bicycle extends Movable {
    move() {
        console.log("Bicycle is moving");
    }
}

function main() {
    const car = new Car();
    const bicycle = new Bicycle();

    car.move();
    bicycle.move();
}

main();

// Car is moving
// Bicycle is moving


// Abstract Class
// Abstraction is a fundamental concept in object-oriented programming (OOP) that 
// focuses on hiding the complex implementation details of a system and 
// exposing only the essential features or functionalities to the users. 
// It allows programmers to work with high-level concepts without worrying about the low-level implementation details.

// Create an abstract class Appliance with an abstract method turnOn().
//  Extend this class with WashingMachine and Refrigerator, 
// each providing an implementation of turnOn(). 
// Write a main method to demonstrate the usage of these classes.


public abstract class Appliance {
    public abstract void turnOn();
}

class WashingMachine extends Appliance {
    @Override
    public void turnOn() {
        System.out.println("Washing machine turned on.");
    }
}

class Refrigerator extends Appliance {
    @Override
    public void turnOn() {
        System.out.println("Refrigerator turned on.");
    }
}

class Main {
    public static void main(String[] args) {
        Appliance washingMachine = new WashingMachine();
        washingMachine.turnOn();

        Appliance refrigerator = new Refrigerator();
        refrigerator.turnOn();
    }
}

// Washing machine turned on.
// Refrigerator turned on.

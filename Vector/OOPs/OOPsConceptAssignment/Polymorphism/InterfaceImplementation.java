// Interface Implementation in java
interface Movable {
    void move();
}

// Car.java (Class implementing Movable interface)
class Car implements Movable {
    @Override
    public void move() {
        System.out.println("Car is moving on the road.");
    }
}

// Bicycle.java (Class implementing Movable interface)
class Bicycle implements Movable {
    @Override
    public void move() {
        System.out.println("Bicycle is moving on the path.");
    }
}

// Main.java (Main class to demonstrate interface implementation)
class Main {
    public static void main(String[] args) {
        Movable car = new Car();
        Movable bicycle = new Bicycle();

        car.move();
        bicycle.move();
    }
}

//Car is moving on the road.
//Bicycle is moving on the path.

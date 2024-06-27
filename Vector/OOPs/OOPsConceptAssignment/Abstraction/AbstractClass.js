// JavaScript does not have built-in abstract classes, but you can create a base class with methods that throw errors if they are not implemented in derived classes.

class Appliance {
    turnOn() {
        throw new Error("This method should be overridden");
    }
}

class WashingMachine extends Appliance {
    turnOn() {
        console.log("Washing machine is now on");
    }
}

class Refrigerator extends Appliance {
    turnOn() {
        console.log("Refrigerator is now on");
    }
}

function main() {
    const washer = new WashingMachine();
    const fridge = new Refrigerator();

    washer.turnOn();
    fridge.turnOn();
}

main();
// Washing machine turned on.
// Refrigerator turned on.

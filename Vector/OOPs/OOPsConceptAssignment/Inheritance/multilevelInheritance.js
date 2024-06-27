// Multilevel Inheritance
// Create a class Animal with a method makeSound(). 
// Extend Animal to create a class Mammal, which adds a method walk(). 
// Further, extend Mammal to create a class Dog, overriding makeSound() to print "Bark". 
// Demonstrate multilevel inheritance in the main method.

class Animal{
    makeSound(){
        console.log('Make a sound from Animal');
    }
}

class Mammal extends Animal{
    walk(){
        console.log('Mammels walk');
    }
}

class Dog extends Mammal{
    makeSound(){
        console.log('Dog Bark')
    }
}

function main(){
    const d = new Dog();
    d.makeSound();
    d.walk()
}

main();
// Dog Bark
// Mammels walk

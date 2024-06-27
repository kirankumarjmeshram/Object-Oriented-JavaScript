// 1. **Simple Inheritance:**
//     - Create a superclass Person with fields name and age, and a method displayDetails(). 
// Extend this class to create a subclass Employee with an additional field employeeId and override the displayDetails() method to include employeeId. 
// Write a main method to demonstrate inheritance by creating an Employee object and calling displayDetails().

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    displayDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Employee extends Person {
    constructor (name, age, employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }

    displayDetails(){
        super.displayDetails();
        console.log(`Employee id :${this.employeeId}`)
    }
}

function main() {
    const employee1 = new Employee('Kirankumar J Meshram',28, 101);
    employee1.displayDetails()
}

main();
// Name: Kirankumar J Meshram, Age: 28
// Employee id :101

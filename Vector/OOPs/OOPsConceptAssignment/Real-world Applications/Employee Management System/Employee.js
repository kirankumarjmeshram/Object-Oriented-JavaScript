class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateBonus() {
        return this.salary * 0.1;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}, Bonus: ${this.calculateBonus()}`);
    }
}
 module.exports = Employee;
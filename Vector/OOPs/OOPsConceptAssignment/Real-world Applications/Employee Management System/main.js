const Manager = require("./Manager");
const Developer = require("./Developer");
const Employee = require("./Employee");

function main() {
    const employees = [
        new Manager("Alice", 80000),
        new Developer("Bob", 60000),
        new Employee("Charlie", 50000)
    ];

    employees.forEach(employee => employee.displayDetails());
}

main();

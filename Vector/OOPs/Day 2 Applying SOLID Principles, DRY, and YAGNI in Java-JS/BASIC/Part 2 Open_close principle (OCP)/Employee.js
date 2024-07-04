import BonusCalculator from './BonusCalculator.js';
class Employee {
    constructor(name, salary, bonusCalculator) {
        this.name = name;
        this.salary = salary;
        this.bonusCalculator = bonusCalculator;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    calculateBonus() {
        return this.bonusCalculator.calculateBonus(this.salary);
    }
}

export default Employee;

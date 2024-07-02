const Employee = require("./Employee");
class Developer extends Employee {
    calculateBonus() {
        return this.salary * 0.15;
    }
}

module.exports = Developer;
const Employee = require("./Employee");
class Manager extends Employee {
    calculateBonus() {
        return this.salary * 0.2;
    }
}
module.exports = Manager;
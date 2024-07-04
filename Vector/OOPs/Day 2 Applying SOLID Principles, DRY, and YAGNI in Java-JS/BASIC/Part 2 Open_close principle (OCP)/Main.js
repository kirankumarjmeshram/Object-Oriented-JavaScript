import Employee from './Employee.js';
import StandardBonusCalculator from './StanderdBonusCalculator.js';
import PerformanceBonusCalculator from './PerformanceBonusCalculator.js';

const standardEmployee = new Employee("Alice", 50000, new StandardBonusCalculator());
console.log("Standard Bonus: " + standardEmployee.calculateBonus());

const performanceEmployee = new Employee("Bob", 50000, new PerformanceBonusCalculator());
console.log("Performance Bonus: " + performanceEmployee.calculateBonus());

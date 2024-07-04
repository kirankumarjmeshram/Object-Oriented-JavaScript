import BonusCalculator from './BonusCalculator.js';

class PerformanceBonusCalculator extends BonusCalculator {
    calculateBonus(salary) {
        return salary * 0.2;
    }
}

export default PerformanceBonusCalculator;

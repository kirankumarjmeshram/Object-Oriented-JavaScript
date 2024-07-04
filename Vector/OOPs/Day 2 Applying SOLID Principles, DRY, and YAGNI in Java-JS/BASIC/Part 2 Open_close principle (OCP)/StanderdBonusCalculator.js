import BonusCalculator from "./BonusCalculator.js";
class StanderdBonusCalculator extends BonusCalculator {
    calculateBonus(salary) {
        return salary * 0.1;
    }
}

export default StanderdBonusCalculator;
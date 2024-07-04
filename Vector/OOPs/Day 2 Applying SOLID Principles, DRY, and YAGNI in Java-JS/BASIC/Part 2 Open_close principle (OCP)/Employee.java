public class Employee {
    private String name;
    private double salary;
    private BonusCalculator bonusCalculator;

    public Employee(String name, double salary, BonusCalculator bonusCalculator) {
        this.name = name;
        this.salary = salary;
        this.bonusCalculator = bonusCalculator;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    public double calculateBonus() {
        return bonusCalculator.calculateBonus(salary);
    }
}
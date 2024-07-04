public class Main {
    public static void main(String[] args) {
        Employee standardEmployee = new Employee("Alice", 50000, new StandardBonusCalculator());
        System.out.println("Standard Bonus: " + standardEmployee.calculateBonus());

        Employee performanceEmployee = new Employee("Bob", 50000, new PerformanceBonusCalculator());
        System.out.println("Performance Bonus: " + performanceEmployee.calculateBonus());
    }
}

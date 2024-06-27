//  Method Overloading (not supported in javascript)
// Create a class MathOperations with overloaded methods multiply(int a, int b), 
// multiply(int a, int b, int c), and multiply(double a, double b). 
// Write a main method to test these methods.

class MathOperations {
    public int multiply (int a, int b) {
        return a * b;
    }

    public int multiply(int a, int b, int c) {
        return a * b * c;
    }

    public double multiply(double a, double b) {
        return a * b;
    }
}

class Main {
    public static void main(String[] args) {
        MathOperations mathOps = new MathOperations();

        int result1 = mathOps.multiply(5, 6);
        System.out.println(result1);

        int result2 = mathOps.multiply(5, 6, 7);
        System.out.println(result2);
        

        double result3 = mathOps.multiply(5.5, 6.5);
        System.out.println(result3);

    }
}

// 30
// 210
// 35.75

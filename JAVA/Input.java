import java.util.Scanner;
class Input{
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number:");
        int a = sc.nextInt();
        System.out.println("Enter second number:");
        int b = sc.nextInt();

        int sum = a+b;
        int diff = a-b;
        int pro = a*b;
        int quo = a/b;
        System.out.println("Additon: " + sum);
        System.out.println("Subtraction: " + diff);
        System.out.println("Multiplication: " + pro);
        System.out.println("Division: " + quo);
    }
}
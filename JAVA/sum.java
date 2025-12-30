import java.util.Scanner;
class sum{
    public static void main (String[] args){
        int sum = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Nth number:");
        int N = sc.nextInt();
        for(int i=1;i<=N;i++){
            sum = sum + i;
        }
        System.out.println("Total Sum from 1 to " + N + " is " + sum);
    }
}
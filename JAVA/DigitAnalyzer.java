import java.util.Scanner;
class DigitAnalyzer{
    int count = 0;
    int ld;
    void countDigit(int num, int d){
        // if(num==0)
        //     return 1;
        // else{
            while(num>0)
            {
                ld=num%10;
                if(ld==d)
                {
                    count += 1;
                }
                num=num/10;
            }
        }
        // return count;
        void display()
        {
            System.out.println("Count : " + count);
        
        }


    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number:");
        int n = sc.nextInt();
        System.out.println("Enter the digit to check:");
        int dd = sc.nextInt();
        DigitAnalyzer dig = new DigitAnalyzer();
        dig.countDigit(n,dd);
        dig.display();

    }
}

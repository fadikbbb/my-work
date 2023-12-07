import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("enter an integer: ");
        int n = input.nextInt();
        System.out.print("enter a sum: ");
        int sum = input.nextInt();

        if (sum > n) {
            int sumn = n + n;
            System.out.print("you need to add " + (sum - sumn) + " to reach the sum");

        } else if (sum < n) {
            int sumn = n + n;
            System.out.print("you need to subtract " + (sumn - sum) + " to reach the sum");
        }

        else if (n + n == sum) {
            System.out.print(n + " + " + n + " = " + sum);
        }
    }
}

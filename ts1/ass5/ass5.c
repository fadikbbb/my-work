#include <stdio.h>
#include <math.h>
int main()
{
//----------------------==========1==========------------------------------
    // int i, x, c = 0;
    // for (i = 0; i < 2;)
    // {
    //     printf("enter an enteger:");
    //     scanf("%d", &x);
    //     if (x < 0)
    //     {
    //         break;
    //     }
    //     if (x % 4 == 0)
    //     {
    //         printf("%d is a multiple of 4\n", x);
    //         c++;
    //     }
    //     else
    //     {
    //         printf("%d is not a multiple of 4\n", x);
    //     }
    // }
    // printf("the total number of integers entered which are multiple of 4 is %d", c);

//----------------------==========2==========------------------------------

    // int x, i, g, c;

    // for (i = 0; i < 2;)
    // {
    //     printf("enter a number between 1 and 100:(0 to exit):");
    //     scanf("%d", &x);
    //     //----------------------
    //     c = 0;
    //     for (g = 1; g <= x; g++)
    //     {
    //         if (x % g == 0)
    //         {
    //             c++;
    //         }
    //         else
    //         {
    //             continue;
    //         }
    //     }
    //     //---------------------

    //     if (x >= 0 && x < 101)
    //     {
    //         if (x == 0)
    //         {
    //             break;
    //         }
    //         if (c <= 2)
    //         {
    //             printf("%d is prime\n", x);
    //         }
    //         else if (c <= 3)
    //         {
    //             printf("%d is half prime\n", x);
    //         }
    //         else
    //         {
    //             printf("%d is not half prime and not prime \n", x);
    //         }
    //     }
    //     else
    //     {
    //         printf("invalid input\n");
    //     }
    //     //---------------------
    // }

//----------------------==========3==========------------------------------

    // int number, digitCount = 0, sumOfDivisors = 0, divisor, copyOfNumber, digit, powerSum = 0, isPrime = 1, reversedNumber = 0;

    // printf("Enter your number: ");
    // scanf("%d", &number);

    // copyOfNumber = number;

    // // Count the number of digits
    // while (copyOfNumber != 0)
    // {
    //     digitCount++;
    //     copyOfNumber /= 10;
    // }

    // // Check for Armstrong number
    // copyOfNumber = number;
    // while (copyOfNumber != 0)
    // {
    //     digit = copyOfNumber % 10;
    //     powerSum += pow(digit, digitCount);
    //     copyOfNumber /= 10;
    // }

    // if (powerSum == number)
    // {
    //     printf("%d is an Armstrong number\n", number);
    // }

    // //----------------------------------------------------

    // // Check for Perfect number
    // for (divisor = 1; divisor <= number / 2; divisor++)
    // {
    //     if (number % divisor == 0)
    //     {
    //         sumOfDivisors += divisor;
    //     }
    // }

    // if (sumOfDivisors == number)
    // {
    //     printf("%d is a perfect number\n", number);
    // }

    // //------------------------------------

    // // Check for Prime number
    // for (divisor = 2; divisor <= number / 2; divisor++)
    // {
    //     if (number % divisor == 0)
    //     {
    //         isPrime = 0;
    //         break;
    //     }
    // }

    // if (isPrime)
    // {
    //     printf("%d is a prime number\n", number);
    // }

    // //----------------------------------------

    // // Check for Palindrome
    // copyOfNumber = number;
    // while (copyOfNumber != 0)
    // {
    //     reversedNumber = reversedNumber * 10 + (copyOfNumber % 10);
    //     copyOfNumber /= 10;
    // }

    // if (number == reversedNumber)
    // {
    //     printf("%d is a Palindrome\n", number);
    // }

//----------------------==========5==========------------------------------

// int copyOfNumber,number,reversedNumber=0;
//  printf("enter your number: ");
//  scanf("%d",&number);
//  copyOfNumber = number;
//     while (copyOfNumber != 0)
//     {
//         reversedNumber=(copyOfNumber%10)+(reversedNumber*10);
//         copyOfNumber/=10;
//     }
//     printf("%d after reversed is %d",number,reversedNumber);

//----------------------==========5==========------------------------------

// int sum=0,y ,x;
// 	int i ;
// 	for(i=0;i<2;){
// 		printf("enter your number: ");
// 		scanf("%d",&y);
// 		if(y<0){
// 			break;
// 		}
// 		sum=sum+y;
// 	}
// 	printf("sum is %d",sum);
}
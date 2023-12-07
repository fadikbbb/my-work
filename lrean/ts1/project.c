#include <stdio.h>

int main()
{
	// int i;
	// int x;
	// printf("enter your number: ");
	// scanf("%d", &x);
	// for (i = 0; i <= 10; i++)
	// {
	// 	int sum = x * i;
	// 	printf("\nthis is %d", i);
	// 	printf("\n %d * %d = %d ", x, i, sum);
	// }
	//---------------------------------------------------------------------
	// int x, y, mult, mult1, mult2, mult3;
	// char z;
	// printf("enter your number: ");
	// scanf("%d %c %d", &x, &z, &y);
	// if (z == '*')
	// {
	// 	mult = x * y;
	// 	printf("%d", mult);
	// }
	// else if (z == '/')
	// {
	// 	mult1 = x / y;
	// 	printf("%d", mult1);
	// }
	// else if (z == '-')
	// {
	// 	mult2 = x - y;
	// 	printf("%d", mult2);
	// }
	// else if (z == '+')
	// {
	// 	mult3 = x + y;
	// 	printf("%d", mult3);
	// }
	// else
	// {
	// 	printf("this operator not found");
	// }
	//--------------------------------------------------------------------
	// int grade;
	// printf("enter you grade: ");
	// scanf("%d",&grade);
	// if (grade>=90)
	// {
	// 	printf("your grade is \"A\"");
	// }
	// else if (grade>=80)
	// {
	// 	printf("your grade is \"B\"");
	// }
	// else if (grade>=70)
	// {
	// 	printf("your grade is \"C\"");
	// }
	// else if (grade>=60)
	// {
	// 	printf("your grade is \"D\"");
	// }
	// else
	// {
	// 	printf("your grade is \"F\"");
	// }
	//-----------------------------------------------------------------------------
	char name[30];
	int HW, children, HWM, paid;
	printf("enter your name: ");
	scanf("%s", &name);
	printf("enter the working hours pre day: ");
	scanf("%d", &HW);
	printf("enter number of the children: ");
	scanf("%d", &children);
	paid = children * 20;
	HWM = HW * 30;
	float rate = ((float)paid) / (float)HWM;
	printf("your name is %s\n", name);
	printf("your number of hours you work pre month is %d hour\n", HWM);
	printf("your salary pre hour is %.1f$\n", rate);
	printf("your salary pre month is %d$\n", paid);
}
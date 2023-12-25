#include<stdio.h>

int main (){
	int sum,y ,x;
	int i ;
	for(i=0;i<2;){
		printf("enter your number: ");
		scanf("%d",&y);
		sum=sum+y;
		if(y==0){
			break;
		}
	}
	printf("sum is %d",sum);
}

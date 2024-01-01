#include<stdio.h>

int main (){
	int sum=0,y ,x;
	int i ;
	for(i=0;i<2;){
		printf("enter your number: ");
		scanf("%d",&y);
		if(y<0){
			break;
		}
		sum=sum+y;
	}
	printf("sum is %d",sum);
}

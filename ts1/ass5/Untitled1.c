#include <stdio.h>
#include <string.h>
int main()
{
    char name[0][10];
    double duration;
    int price, cost;
    char stop[4];
    double min ;
    int exit = 0;
    do
    {
        printf("name :");
        scanf("%s", &name);
        printf("duration :");
        scanf("%d", &duration);
        duration = duration / 60;
        exit++;
        printf("price :");
        scanf("%d", &price);
        printf("cost :");
        scanf("%d", &cost);
        printf("do you want stop yes/no: ");
        scanf(" %3s", &stop);
        if (exit < 1){
		min = duration;
		}
		
        if (exit > 1){
            if (min > duration){
                min = duration;
            }
        }    
		 if (strcmp(stop, "yes") == 0) {
            
          } else if (strcmp(stop, "no") == 0) {
            
            break; 
		} else {
            printf("Invalid input. Please enter 'yes' or 'no'.\n");
        }    
    } while (1);
    printf("min = %d \n", min);
}


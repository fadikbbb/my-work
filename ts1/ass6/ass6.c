#include <stdio.h>
#include <string.h>

int main() {
    char name[1][10], minOfname[1][10];
    double duration = 0, min = 999999, priceUSD, priceLPB, cost, minOfPriceUSD, minOfpriceLPB;
    char stop[4];

    do {
        printf("name: ");
        scanf("%9s", name[0]);
        printf("duration: ");
        scanf("%lf", &duration);
        printf("min = %.1lf \n", duration);
        printf("price: ");
        scanf("%lf", &priceUSD);
        printf("cost: ");
        scanf("%lf", &cost);
        printf("Do you want to continue? (yes/no): ");
        scanf("%3s", stop);
        duration = duration / 60.0;
        
        if (duration > 2) {
            priceUSD = priceUSD + (cost * 0.025);
            priceUSD = priceUSD * 1.11;
            priceLPB = priceUSD * 90000;
        } else {
            priceUSD = priceUSD + (cost * 0.012);
            priceLPB = priceUSD * 90000;
        }

        if (min > duration) {
            min = duration;
            minOfpriceLPB = priceLPB;
            minOfPriceUSD = priceUSD;
            strcpy(minOfname[0], name[0]); // Corrected to use strcpy for string copy
        }
    } while (strcmp(stop, "yes") == 0);
    printf("name is %s, ", minOfname[0]); // Corrected format specifier for string
    printf("your final price in L.L. is %.1lf L.L., ", minOfpriceLPB);
    printf("and in dollars is %.1lf$, ", minOfPriceUSD);
    printf("and this is the minimum song duration %.1lf minutes. \n", min);
}

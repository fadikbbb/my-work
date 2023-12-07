// #include <stdio.h>
// int main() {
//  char name[4]="fadi";

//  for (int i = 0; i < sizeof name; i++)
//  {
//     printf("%c\n",name[i]);
//  }

// }
#include <stdio.h>
int main()
{
   char students[3][10] = {"osama", "jamil", "hadi"};
   int length=sizeof(students)/sizeof(students[0]);
   for (size_t i = 0; i < length; i++)
   {
      printf("%d-%s is out\n", i+1, students[i]);
   }
   
}
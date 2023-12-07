 #include <stdio.h>
 int main() {
//  char name[4]="fadi";

//  for (int i = 0; i < sizeof name; i++)
//  {
//     printf("%c\n",name[i]);
//  }

// }
// #include <stdio.h>
// int main()
// {
//    char students[3][10] = {"osama", "jamil", "hadi"};
//    int length=sizeof(students)/sizeof(students[0]);
//    for (size_t i = 0; i < length; i++)
//    {
//       printf("%d-%s is out\n", i+1, students[i]);
//    }
   
// }
// #include <stdio.h>

// char* check_triangle(int x, int y, int z) {
//     if (x == y && y == z) {
//         return "Equilateral Triangle";
//     } else if (x == y || y == z || z == x) {
//         return "Isosceles Triangle";
//     } else {
//         return "Scalene Triangle";
//     }
// }

// int main() {
//    int x ,y ,z;
//    scanf("%d %d %d",&x,&y,&z);
//     printf("%s\n", check_triangle(x, y, z));  // Output: Equilateral Triangle
    char name[4];
    scanf("%s", &name);
    printf("My Name is %s", name);
    

 }

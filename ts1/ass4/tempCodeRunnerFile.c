    int a,b ,s;
        printf("enter two number: ");
        scanf("%d %d",&a,&b);
        if (a%b==0)
        {
            s=a%b;
            printf("a=>%d %% b=>%d =%d",a,b,s);
        }
        else if (b%a==0)
        {
            s=b%a;
            printf("b=>%d %% a=>%d =%d",b,a,s);
        }
        else
        printf("no one is factor on another");
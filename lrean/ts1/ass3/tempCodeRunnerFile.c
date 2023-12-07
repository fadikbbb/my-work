    else if (operator== '-')
    {
        sum = num1 - num2;
        printf("sub is %d", sum);
    }
    else if (operator== '*')
    {
        sum = num1 * num2;
        printf("mult is %d", sum);
    }
    else if (operator== '/')
    {
        sum = num1 / num2;
        printf("divs is %d", sum);
    }
    else if (operator== '%')
    {
        sum = num1 % num2;
        printf("divs is %d", sum);
    }
    else
        printf("invalid input");
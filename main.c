#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x[] = {1, 2, 3};

    char translate[] = "140728637355708";

    printf("%p\n", x);
    printf("%s\n", translate);
    printf("%p\n", (void *)&translate);
}
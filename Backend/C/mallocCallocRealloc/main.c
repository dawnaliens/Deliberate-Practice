#include <stdio.h>
#include <stdlib.h>

int main()
{   
    int n;
    printf("Enter size of array: \n");
    scanf("%d", &n);
    int *A = (int *)malloc(n * sizeof(int));
    for(int i = 0; i < n; i++){
        A[i] = i + 1;
    }
    // free(A);
    // A = NULL;   // After free, adjust pointer to NULL
    int *B = (int*)realloc(A, 2 * n * sizeof(int));
    printf("Previous address = %d, New address = %d\n", A, B);
    for(int i = 0; i < 2 * n; i++){
        printf("%d\n", B[i]);
    }
}

    // malloc
    // int n;
    // printf("Enter size of array: \n");
    // scanf("%d", &n);
    // int *A = (int *)malloc(n * sizeof(int));
    // for(int i = 0; i < n; i++){
    //     A[i] = i + 1;
    // }
    // for(int i = 0; i < n; i++){
    //     printf("%d ", A[i]);
    // }
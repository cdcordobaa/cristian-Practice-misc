
import sys

def sumUntilN(n):
    acumulatedSum = 0
    for i in range(n):
        if(i%3 == 0 or i%5 == 0):
            acumulatedSum += i
    print(acumulatedSum)

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    sumUntilN(n)

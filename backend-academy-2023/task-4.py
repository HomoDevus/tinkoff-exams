q = int(input())

def numbersMult(start, end):
    sum = start

    for num in range(start + 1, end + 1):
        sum *= num
    
    return sum

def compressNumber(num):
    sum = 0

    if (num <= 9):
        return num

    for digit in str(num):
        sum += int(digit)

    return compressNumber(sum)

for i in range(q):
    a, b = map(int, input().split())

    print(compressNumber(numbersMult(a, b)))
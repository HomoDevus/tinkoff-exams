n = int(input())
height = 0
end = " "

for i in range(1, n + 1):
    h = i * 2 - 1
    height += h ** 2

    if (i == n):
        end = ""
        
    print(h ** 3 - height, end=end)
n = int(input())
queue = []

for i in range(n):
    operation = list(map(int, input().split()))

    match operation[0]:
        case 1:
            queue.append(operation[1])
        case 2:
            updatedArray = []

            for num in queue:
                updatedArray.append(num)
                updatedArray.append(num)
            
            queue = updatedArray
        case 3:
            print(queue[0])
            queue = queue[1:]


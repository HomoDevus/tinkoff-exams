# Getting arithmetic progression of n
def get_ap(n):
    return n * (n + 1) // 2


# Collects target number from sum of items array
def collect_num(items, target):
    operands = set()

    # First operand will be the biggest number
    biggest = target
    while biggest not in items:
        biggest -= 1
    target -= biggest
    operands.add(biggest)
    items.remove(biggest)

    # If biggest number is a target number return it as an answer
    if target == 0:
        return operands

    # Try to find second pair to biggest. (biggest + n) == target
    for num in items:
        if target - num == 0:
            operands.add(num)
            items.remove(num)
            return operands

    # If there no single pair that equals 0,
    # then it's last iteration and sum of all left numbers equals to target number
    return items.union(operands)


n = int(input())
n_ap = get_ap(n)
target_n = n_ap / 3
numbers = set(range(1, n + 1))
if target_n == int(target_n):
    for _ in range(3):
        ans = collect_num(numbers, int(target_n))
        print(len(ans))
        print(*ans, end="\n\n")
else:
    print(-1)

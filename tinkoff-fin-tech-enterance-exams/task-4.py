def check(num, numbers):
    if num in numbers:
        print('Yes')
    else:
        print('No')


def increase(amount, numbers):
    updated_numbers = set()

    for number in numbers:
        updated_numbers.add(number + amount)

    return updated_numbers


def run_operations(numbers, operations):
    for operation in operations:
        if operation[0] == 0:
            check(operation[1], numbers)
        elif operation[0] == 1:
            numbers = increase(operation[1], numbers)
        elif operation[0] == 2:
            numbers.add(operation[1])
        elif operation[0] == 3:
            numbers.remove(operation[1])


def map_str_input(input_str):
    return list(map(lambda char: int(char), input_str.split(' ')))


set_len = int(input())
input_numbers = map_str_input(str(input()))
operations_amount = int(input())
input_operations = []

for i in range(operations_amount):
    input_operations.append(map_str_input(str(input())))

run_operations(input_numbers, input_operations)
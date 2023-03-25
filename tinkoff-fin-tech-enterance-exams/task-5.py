def unique_amount(arr):
    return len(set(arr))


def count_interesting_days(activities, step):
    curr_step = step
    count = 0
    left_index = 0
    right_index = left_index + step

    while curr_step <= len(activities):
        if unique_amount(activities[left_index:right_index]) >= step:
            count += 1

        left_index += 1
        right_index += 1

        if right_index > len(activities):
            curr_step += 1
            left_index = 0
            right_index = left_index + curr_step

    return count


def map_str_input(input_str):
    return list(map(lambda char: int(char), input_str.split(' ')))


n = int(input())
input_activities = map_str_input(str(input()))
input_step = int(input())
print(count_interesting_days(input_activities, input_step))
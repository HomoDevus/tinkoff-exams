def is_doubled(n, string):
    if n % 2 == 1:
        return False

    left_index = 0
    right_index = n - 1

    while left_index < right_index:
        if string[left_index] != string[right_index]:
            swapped = swap(n, string, left_index, right_index - 1)
            if not swapped:
                return False
            else:
                return True

        left_index += 1
        right_index -= 1

    return True


def swap(n, string, index_to_swap, right_index):
    middle_index = n // 2

    while index_to_swap < right_index:
        letters = list(string)

        if letters[index_to_swap] != letters[right_index]:
            tmp = letters[index_to_swap]
            letters[index_to_swap] = letters[right_index]
            letters[right_index] = tmp
            letters = ''.join(letters)

            if letters[:middle_index] == letters[middle_index:]:
                return letters

        right_index -= 1

    return False


n_input = int(input())
str_input = str(input())
is_ans_positive = is_doubled(n_input, str_input)

if is_ans_positive:
    print('YES')
else:
    print('NO')

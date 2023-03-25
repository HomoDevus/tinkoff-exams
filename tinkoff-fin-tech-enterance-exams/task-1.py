def is_letter(char):
    return char.isalpha()


def is_number(char):
    return char.isnumeric()


def is_letter_or_number(char):
    return is_letter(char) or is_number(char)


def is_letter_num_str(str):
    for char in str:
        if not is_letter_or_number(char):
            return False

    return is_letter(str[0]) ^ is_letter(str[1])


inp_str = str(input())
is_ans_positive = is_letter_num_str(inp_str)

if is_ans_positive:
    print('YES')
else:
    print('NO')

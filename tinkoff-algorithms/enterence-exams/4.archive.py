def get_dividers_amount(number):
    max_counted = 0
    max_divider = 0

    for x in range(1, number + 1):
        counter = 0
        divider = 0

        for tmp in range(1, x + 1):
            result = x / tmp

            if result == int(result):
                counter += 1
                divider = tmp

        if counter > max_counted:
            max_counted = counter
            max_divider = divider

    return [max_divider, max_counted]


n = int(input())
ans = get_dividers_amount(n)
print(*ans, sep="\n")

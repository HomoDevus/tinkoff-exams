columns, rows, quests = map(int, input().split())
matrix = []

def isMovePossible(start, end, stamina):
    return abs(end - start) <= stamina

for i in range(columns):
    row = list(map(int, input().split()))

    matrix.append(row)

for i in range(quests):
    col, row, stamina = map(int, input().split())
    movesAmount = 0

    for y in range(columns):
        if (y != col - 1 and isMovePossible(matrix[col - 1][row - 1], matrix[y][row - 1], stamina)):
            movesAmount += 1

    for x in range(rows):
        if x != row - 1 and isMovePossible(matrix[col - 1][row - 1], matrix[col - 1][x], stamina):
            movesAmount += 1

    print(movesAmount)

board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
placement_coordinates = []
bricks = input()


def minimal_vertical_gap():
    coordinates = [0, 0]
    gap = 4

    for column in range(len(board)):
        curr_gap = 0
        prev = 1
        for cell in board[column]:
            if cell == 0 and prev == 1:
                gap = 1
            elif cell == 0 and prev == 0:
                gap += 1
            elif cell == 1 and prev == 0 and curr_gap < gap:
                gap = curr_gap
            prev = cell

    return gap


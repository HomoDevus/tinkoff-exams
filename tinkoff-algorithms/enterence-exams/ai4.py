def place_brick(field, brick, r, c):
    # Check if the brick fits within the bounds of the field
    if r + brick[0] > len(field) or c + brick[1] > len(field[0]):
        return False

    # Check if the cells occupied by the brick are already filled
    for i in range(r, r + brick[0]):
        for j in range(c, c + brick[1]):
            if field[i][j] == 1:
                return False

    # Place the brick on the field
    for i in range(r, r + brick[0]):
        for j in range(c, c + brick[1]):
            field[i][j] = 1

    # Check if any row or column is completely filled and clear it
    for i in range(len(field)):
        if all(field[i]):
            field[i] = [0] * len(field[0])

    for j in range(len(field[0])):
        if all(field[i][j] for i in range(len(field))):
            for i in range(len(field)):
                field[i][j] = 0

    return True


def solve(bricks):
    # Initialize the field as an empty 4x4 grid
    field = [[0] * 4 for _ in range(4)]

    # Iterate through the bricks in the sequence
    for i, brick in enumerate(bricks):
        # Try to place the brick at every possible position on the field
        placed = False
        for r in range(len(field)):
            for c in range(len(field[0])):
                if place_brick(field, brick, r, c):
                    print(r + 1, c + 1)
                    placed = True
                    break
            if placed:
                break

        # If the brick could not be placed, return False
        if not placed:
            return False

    # If all the bricks have been placed successfully, return True
    return True


# Test the solution
bricks = [[2, 1], [1, 2], [2, 1], [2, 1], [1, 2], [1, 2], [2, 1], [1, 2]]
print(solve(bricks))

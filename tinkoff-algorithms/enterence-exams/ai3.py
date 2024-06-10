def solve(s: str):
    # Initialize the field as a 4x4 matrix of zeros
    field = [[0 for _ in range(4)] for _ in range(4)]
    # Initialize the solution as an empty list
    solution = []

    # Iterate through the sequence of bricks
    for brick in s:
        # Initialize the position to (1, 1)
        row, col = 1, 1
        placed = False

        # Try to place the brick at different positions
        while not placed:
            # Check if the current position is valid (i.e. not occupied and inside the field)
            if field[row-1][col-1] == 0 and row <= 4 and col <= 4:
                # If the brick is horizontal, check if it fits within the field
                if brick == '1' and col + 1 <= 4:
                    field[row-1][col-1] = 1
                    field[row-1][col] = 1
                    placed = True
                    solution.append((row, col))
                # If the brick is vertical, check if it fits within the field
                elif brick == '0' and row + 1 <= 4:
                    field[row-1][col-1] = 1
                    field[row][col-1] = 1
                    placed = True
                    solution.append((row, col))
            # If the brick couldn't be placed at the current position, try the next one
            if not placed:
                col += 1
                if col > 4:
                    col = 1
                    row += 1

        # Check if any row or column has become completely occupied
        for i in range(4):
            # If a row is completely occupied, clear it
            if sum(field[i]) == 4:
                field[i] = [0, 0, 0, 0]
            # If a column is completely occupied, clear it
            if sum(field[j][i] for j in range(4)) == 4:
                for j in range(4):
                    field[j][i] = 0
        print(field)

    return solution

print(solve('01001101'))
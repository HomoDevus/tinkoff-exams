def solve(field, bricks):
    # Check if all bricks have been placed
    if not bricks:
        return True

    # Try all possible positions for the current brick
    for i in range(4):
        for j in range(4):
            # Check if the current position is valid
            if is_valid(field, bricks[0], i, j):
                # Place the brick at the current position
                place_brick(field, bricks[0], i, j)
                # Recursively solve the rest of the bricks
                if solve(field, bricks[1:]):
                    return True
                # If the current position is not a solution, remove the brick
                remove_brick(field, bricks[0], i, j)

    # If no position is a valid solution, return False
    return False

def is_valid(field, brick, i, j):
    # Check if the brick fits in the field
    if i + brick.shape[0] > 4 or j + brick.shape[1] > 4:
        return False
    # Check if the brick overlaps with any existing bricks
    for m in range(brick.shape[0]):
        for n in range(brick.shape[1]):
            if field[i + m][j + n] == 1:
                return False
    return True

def place_brick(field, brick, i, j):
    # Place the brick on the field
    for m in range(brick.shape[0]):
        for n in range(brick.shape[1]):
            field[i + m][j + n] = 1

def remove_brick(field, brick, i, j):
    # Remove the brick from the field
    for m in range(brick.shape[0]):
        for n in range(brick.shape[1]):
            field[i + m][j + n] = 0

# Initialize the field
field = [[0 for _ in range(4)] for _ in range(4)]
# Convert the bricks string to a list of brick arrays
bricks = [[[int(c) for c in row] for row in brick.split('\n')] for brick in bricks_str.split('\n\n')]
# Solve the bricks
solution = solve(field, bricks)

if solution:
    # Print the solution
    for brick in bricks:
        for i in range(4):
            for j in range(4):
                if field[i][j] == 1:
                    print(i + 1, j + 1)
                    break
            else:
                continue
            break
else:
    print("No solution")

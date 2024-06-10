def solve(s):
    field = [[0 for _ in range(4)] for _ in range(4)]
    for i, brick in enumerate(s):
        if brick == '0':
            # try to place vertically
            placed = False
            for r in range(4):
                if field[r][i] == 0 and field[r+1][i] == 0:
                    field[r][i] = 1
                    field[r+1][i] = 1
                    print(r+1, i+1)
                    placed = True
                    break
            if not placed:
                # try to place horizontally
                for c in range(4):
                    if field[i][c] == 0 and field[i][c+1] == 0:
                        field[i][c] = 1
                        field[i][c+1] = 1
                        print(i+1, c+1)
                        break
        else:
            # try to place horizontally
            placed = False
            for c in range(4):
                if field[i][c] == 0 and field[i][c+1] == 0:
                    field[i][c] = 1
                    field[i][c+1] = 1
                    print(i+1, c+1)
                    placed = True
                    break
            if not placed:
                # try to place vertically
                for r in range(4):
                    if field[r][i] == 0 and field[r+1][i] == 0:
                        field[r][i] = 1
                        field[r+1][i] = 1
                        print(r+1, i+1)
                        break

# test the solution
solve('010')

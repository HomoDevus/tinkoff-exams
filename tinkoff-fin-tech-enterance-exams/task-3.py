def find_conflict_points(ribs, opinions):
    conflict_points = []

    for rib in ribs:
        if opinions[rib[0] - 1] != opinions[rib[1] - 1]:
            conflict_points.append(rib)

    return conflict_points


def solve_conflict_points(conflict_points):
    conflict_nodes = conflict_points[0]

    for conflict_point in conflict_points[1:]:
        conflict_nodes = list(filter(lambda conflict_node: conflict_node in conflict_point, conflict_nodes))
        if len(conflict_nodes) == 0:
            return False

    return conflict_nodes


def char_to_num(char):
    return int(char)


n = int(input())
input_ribs = []
for i in range(n - 1):
    input_ribs.append(list(map(char_to_num, str(input()).split(' '))))
input_opinions = list(map(char_to_num, str(input()).split(' ')))
found_conflict_points = find_conflict_points(input_ribs, input_opinions)

if len(found_conflict_points) == 0:
    print('YES')
    print(n)
else:
    solved_conflict_points = solve_conflict_points(found_conflict_points)

    if solved_conflict_points:
        print('YES')
        print(max(solved_conflict_points))
    else:
        print('NO')

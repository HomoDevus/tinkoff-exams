n = int(input())
herds = []
bestHerd
bestHerdStrength
bestHerdUgliness

def countHorses(stable):
    horses = {
        a: 0,
        b: 0,
        c: 0
    }

    for herd of stable:
        for horse of herd:
            horses[horse] += 1

    return types

def countUgliness(stable):
    horses = countHorses(stable)

    return max(horses.a, horses.b, horses.c) - min(horses.a, horses.b, horses.c)

for i in range(n):
    herds.push(input())

for herdsAmount in range(1, len(herds) + 1):
    left = 0, right = herdsAmount

    while right < len(herds):
        ugliness = countUgliness(herds[left:right])

        if ugliness < bestHerdUgliness or (ugliness == bestHerd and strength > bestHerdStrength):
            bestHerd = herds[left:right]
            bestHerdStrength = # add strength
            bestHerdUgliness = ugliness

        left += 1
        right += 1

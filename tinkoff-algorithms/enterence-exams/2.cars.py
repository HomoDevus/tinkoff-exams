n = int(input())
cars = []

for i in range(n):
    car_speed = int(input())

    if len(cars) != 0 and car_speed > cars[i - 1]:
        car_speed = cars[i - 1]
    
    cars.append(car_speed)

print(*cars, sep=" ")
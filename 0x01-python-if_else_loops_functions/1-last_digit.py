#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
n = number
mul = 1
if number < 0:
    mul = -1
    n *= -1
last_digit = (n % 10) * mul
print(f"Last digit of {number} is {last_digit} and ", end="")
if last_digit > 5:
    print("is greater than 5")
elif last_digit == 0:
    print("is 0")
elif last_digit < 6:
    print("is less than 6 and not 0")

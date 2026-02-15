# Iterations in Programming

## What are Iterations?

**Iteration** is the process of repeating a set of instructions or operations multiple times. In programming, we use loops to perform iterations. Each repetition is called an **iteration**.

## Types of Iteration Structures

### 1. **For Loop**
Used when you know how many times you want to iterate.

```python
# Python example
for i in range(5):
    print(f"Iteration {i}")

# JavaScript example
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}
```

### 2. **While Loop**
Used when you want to iterate until a condition becomes false.

```python
# Python example
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1
```

### 3. **Do-While Loop**
Executes at least once, then checks the condition (available in some languages).

```java
// Java example
int i = 0;
do {
    System.out.println("Iteration " + i);
    i++;
} while (i < 5);
```

### 4. **For-Each Loop**
Used to iterate over collections or arrays.

```python
# Python example
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

## Common Iteration Patterns

**1. Counting iterations:**
```python
for i in range(10):
    print(i)  # 0 to 9
```

**2. Iterating with step:**
```python
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8
```

**3. Nested iterations:**
```python
for i in range(3):
    for j in range(3):
        print(f"i={i}, j={j}")
```

---

# Interview Practice Questions

## Beginner Level

**Q1: What is the difference between a for loop and a while loop?**

*Expected Answer:* A for loop is used when the number of iterations is known beforehand, while a while loop is used when iterations depend on a condition that may not be predetermined. For loops are more concise for counting, while while loops are better for condition-based iteration.

**Q2: Write a program to print numbers from 1 to 10.**

```python
for i in range(1, 11):
    print(i)
```

**Q3: What is an infinite loop? Give an example.**

*Expected Answer:* An infinite loop runs indefinitely because its termination condition is never met.
```python
while True:
    print("This runs forever")
```

**Q4: How do you exit a loop early?**

*Expected Answer:* Use the `break` statement to exit a loop before it completes all iterations.

**Q5: What does the `continue` statement do?**

*Expected Answer:* The `continue` statement skips the current iteration and moves to the next one without executing the remaining code in the loop body.

## Intermediate Level

**Q6: Write a program to find the sum of all numbers from 1 to 100.**

```python
total = 0
for i in range(1, 101):
    total += i
print(total)  # Output: 5050
```

**Q7: How do you iterate over a dictionary in Python?**

```python
my_dict = {"a": 1, "b": 2, "c": 3}

# Iterate over keys
for key in my_dict:
    print(key)

# Iterate over values
for value in my_dict.values():
    print(value)

# Iterate over key-value pairs
for key, value in my_dict.items():
    print(f"{key}: {value}")
```

**Q8: Write a program to print all even numbers between 1 and 20.**

```python
for i in range(2, 21, 2):
    print(i)
```

**Q9: What is the output of this code?**
```python
for i in range(5):
    if i == 3:
        continue
    print(i)
```

*Expected Answer:* 0, 1, 2, 4 (skips 3)

**Q10: Write a program to reverse a string using iteration.**

```python
text = "hello"
reversed_text = ""
for char in text:
    reversed_text = char + reversed_text
print(reversed_text)  # Output: "olleh"
```

## Advanced Level

**Q11: Write a program to find all prime numbers between 1 and 50.**

```python
for num in range(2, 51):
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(num)
```

**Q12: Explain the time complexity of nested loops.**

*Expected Answer:* Nested loops typically have O(n²) time complexity. If you have a loop inside another loop, and both iterate n times, the total number of iterations is n × n = n².

**Q13: Write a program to find the factorial of a number using iteration.**

```python
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))  # Output: 120
```

**Q14: What is the difference between `break` and `continue`?**

*Expected Answer:* `break` exits the loop entirely, while `continue` skips only the current iteration and proceeds to the next one.

**Q15: Write a program to find the Fibonacci sequence up to n terms.**

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b

fibonacci(10)  # Output: 0 1 1 2 3 5 8 13 21 34
```

## Tricky/Scenario-Based Questions

**Q16: How would you iterate through two lists simultaneously?**

```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]

for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

**Q17: What happens if you modify a list while iterating over it?**

*Expected Answer:* Modifying a list during iteration can lead to unexpected behavior or errors. It's better to iterate over a copy or use list comprehension.

```python
# Problem
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # Risky!

# Better approach
numbers = [1, 2, 3, 4, 5]
numbers = [num for num in numbers if num % 2 != 0]
```

**Q18: Write a program to find duplicate elements in a list.**

```python
numbers = [1, 2, 3, 2, 4, 5, 1]
seen = set()
duplicates = set()

for num in numbers:
    if num in seen:
        duplicates.add(num)
    else:
        seen.add(num)

print(duplicates)  # Output: {1, 2}
```

**Q19: How do you iterate through a matrix (2D array)?**

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for element in row:
        print(element, end=" ")
    print()
```

**Q20: What are generator expressions and how do they relate to iteration?**

*Expected Answer:* Generator expressions are memory-efficient iterators that generate values on-the-fly rather than storing them all in memory.

```python
# List comprehension (stores all values)
squares_list = [x**2 for x in range(10)]

# Generator expression (generates on demand)
squares_gen = (x**2 for x in range(10))

for square in squares_gen:
    print(square)
```

---

## Tips for Interview Success

1. **Understand time and space complexity** of your iterative solutions
2. **Practice edge cases**: empty inputs, single elements, large datasets
3. **Know when to use which loop**: for vs while vs recursion
4. **Be aware of off-by-one errors** (fencepost problems)
5. **Understand loop control statements**: break, continue, pass/return

Good luck with your interviews!
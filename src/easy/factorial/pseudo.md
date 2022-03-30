# Pseudo Code Solution
1. Starting with the original number provided, go through every whole number between it and 1. Multiply the original number by (original number -1) and store the product of this in a variable.
2. Repeat this process, multiplying the product of the previous calculation by (original number -2), storing the product in the same variable. 
3. Repeat this process until the (original number - i) is less than 2;
4. Return the variable which should contain the product of all calculations.


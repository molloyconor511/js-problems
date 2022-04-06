# Pseudo Code Solution
Loop through list from 1-100,000.
Check each number(referred to as "input") for its proper divisors and add them together to form variable "properDivisorSum".
Check "properDivisorSum" for all its proper divisors and sum together to form form variable "newProperDivisorSum"
If "newProperDivisorSum" === "input", then numbers assigned to "properDivisorSum" and "newProperDivisorSum" are an amicable pair. Push all amicable pairs into separate list(assigned to variable name "amicablePairList"and display at end of function.
Decrease number size by 1 and use recursion to repeat function until base statement reached

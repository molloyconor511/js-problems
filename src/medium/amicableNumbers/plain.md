# Plain English Solution
Check every number from 100,000 - 1 and with each number (referred to as "input"), check what other numbers can:
    -Evenly divide into it
    -Have a value > 0 and < the original number
These are the proper divisors of that number. Add them together. We'll call this "properDivisorSum".
Find all proper divisors of "properDivisorSum" and add together.  We'll call this "newProperDivisorSum".
If "input" = "newProperDivisorSum", these are an amicable pair. Store in a list (referred to as "amicablePairList")


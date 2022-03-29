# Pseudo Code Solution

const fxnName = (single argument defining max limit) => {

    let the variable defining the sum of all multiples of 3 or 5 = 0- NOTE: must use "let" as variable constantly changing.

    (Loop through every number between 1 & 1000(value of the argument handed down) and increasing in increments of 1) {
         if the returned value meets the desired requirements( >0 and divisible by 3 or 5 ) {
            1. Log that number to the console under the heading "Natural Number"
            2. Let the new total variable equal to the old total plus i. 
            3. Also log the new total value to the console.
        }-close if statement
    }-close for loop
Log the final total to the console under the heading "Absolute total"
}-close function

Run the function passing 1000 as the single parameter.

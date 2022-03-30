const factorial = (num) => {
    let total = 1;
    for (let i = num; i >= 2; i--) {
        total *= i;
    }
    console.log(`${num}! =`, total);
    return total;
}

factorial(5);
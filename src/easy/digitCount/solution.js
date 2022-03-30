const intToArrayLength = (num) => {

    const intToString = num.toString();
    const stringToArray = [...intToString];
    const digitCount = stringToArray.length;

    console.log("Number of digits in", num, "=", digitCount);

    return digitCount;
}

intToArrayLength(318);
intToArrayLength(92563);
intToArrayLength(4666);
intToArrayLength(314890);
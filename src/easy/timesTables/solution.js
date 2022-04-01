const numList = (num1, num2) => {
    const multipleList = [];
    let total = 1;

    for (let i = num1[0]; i <= num1.length; i++) {
        for (let j = num2[0]; j <= num2.length; j++) {
            total = (i * j);
            multipleList.push(total);
        };
    };

    const evenGroups = (usedArray, arraySize) => {
        const result = [];

        for (let i = 0; i < usedArray.length; i += arraySize) {
            const arrayOf12 = usedArray.slice(i, i + arraySize);
            result.push(arrayOf12);
        }
        return result;
    }
    console.log(evenGroups(multipleList, 12));
    return multipleList;
}

numList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
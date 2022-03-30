// Apologies in advance but couldn't get an exponent symbol on this chromebook so had to go with multiplication!

const cubedSum = (numList) => {
    let total = 0;

    for (let i = 0; i < numList.length; i++) {
        total += (numList[i] * numList[i] * numList[i]);
    }
    console.log(numList, "=>", total);
    return total;
}

cubedSum([1, 5, 9]);
cubedSum([3, 4, 5]);
cubedSum([2]);
cubedSum([]);
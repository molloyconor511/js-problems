const getAmicablePairs = (input) => {
    let properDivisorSum = 0;
    let newProperDivisorSum = 0;
    const amicablePairList = [];
    
    for (let i = 1; i < input; i++) {   
       input % i === 0 ? properDivisorSum += i : "";               
    };

    for (let i = 1; i < properDivisorSum; i++){
       properDivisorSum % i === 0 ? newProperDivisorSum += i : "";        
    };
   
    if (input === newProperDivisorSum && properDivisorSum > newProperDivisorSum && properDivisorSum !== input) {
      amicablePairList.push(properDivisorSum, newProperDivisorSum);
      console.log("Amicable Pair List:", amicablePairList);
    };

    const newNumber = (input - 1);

    newNumber > 0 ? getAmicablePairs(newNumber) : "";
};
getAmicablePairs(100000);
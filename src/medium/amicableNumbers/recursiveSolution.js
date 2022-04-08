
const getAmicablePairs = (input) => {
   let properDivisorSum = 0;
   let newProperDivisorSum = 0;
   const amicablePairList = [];
   
   for (let i = 1; i < input; i++) {   
      if (input % i ===0) properDivisorSum += i;               
   };

   for (let i = 1; i < properDivisorSum; i++){  
      if (properDivisorSum % i ===0) newProperDivisorSum += i;                   
   };
  
   if (input === newProperDivisorSum && properDivisorSum > newProperDivisorSum && properDivisorSum !== input) {
     amicablePairList.push(properDivisorSum, newProperDivisorSum);
     console.log("Amicable Pair List:", amicablePairList);
   };

   const newInput = (input - 1);

   if (newInput > 0) getAmicablePairs(newInput);
   
};

getAmicablePairs(2000)
  









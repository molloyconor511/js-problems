
const getSumDivisors = (number) => {
   let sum = 0;
   for (let i = 1; i < number; i++) {
     if (number % i === 0) {
       sum += i;
     }
   }
   return sum;
 };
 
 const getAmicablePair = (number) => {
   const sumNumber = getSumDivisors(number);
   if (sumNumber !== number) {
     const sumPairCandidate = getSumDivisors(sumNumber);
     if (number === sumPairCandidate) {
       return [number, sumNumber];
     }
   }
   return [];
 };
 
 const getAmicablePairs = (maxNumber) => {
   const amicablePairs = [];
 
   for (let i = 1; i < maxNumber; i++) {
     let thisPair;
 
     if (!amicablePairs.find((arr) => arr.includes(i))) {
       thisPair = getAmicablePair(i);
     }
 
     if (thisPair && thisPair.length) {
       amicablePairs.push(thisPair);
       console.log("Amicable Pair:", thisPair);
     }
   }
   console.log("Amicable Pairs:", amicablePairs);
   return amicablePairs;
 
 };
 
getAmicablePairs(100000);

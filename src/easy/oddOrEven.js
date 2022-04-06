 //Loop through provided numbers
 //   If evenly divisible by 2, put into even list; if not, put into odd list

//  const oddOrEven = input => {
//      const oddList = [];
//      const evenList = [];

//      for (let i = 0; i < input.length; i++) {
//          if (i % 2 === 0) {
//              evenList.push[i];
//              console.log(evenList)
//          }
//          else {
//              oddList.push[i]
//              console.log(oddList)
//          }
//      }
//  }

//  oddOrEven([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

const oddOrEven = (input) => {
  
    const oddList = [];
    const evenList = [];
    //let newList = (oddList, evenList)
 
   for (let i = 0; i < input.length; i++) {
     if (input[i] % 2 === 0) {
       evenList.push(input[i]);
     }
     else {
       oddList.push(input[i])
     }
     
   }
       console.log(oddList, evenList)
       return ("Odd Number List", oddList && evenList)
 
 }
 
 oddOrEven([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

 /*
 // const numList = (num1, num2) => {
//     const multipleList = [];
//     let total = 1;
   
//     for(let i = num1[0]; i <= num1.length; i ++) {
//       for (let j = num2[0]; j <= num2.length; j++) {
//         total = (i * j)
//         multipleList.push(total)
//       };
//     };
    
//     const evenGroups = (usedArray, groupSize) => {
//       const result = [];

//       for (let i = 0; i < usedArray.length; i += groupSize) {
//         const group = usedArray.slice(i, i + groupSize);
//         result.push(group);
//       }
//       return result;
//     }
//     console.log(evenGroups(multipleList, 12));
      
//     return multipleList;
    
// };

// numList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// const numList = (num1, num2) => {
//     const multipleList = [];
//     let total = 1;

//     for (let i = num1[0]; i <= num1.length; i++) {
//         for (let j = num2[0]; j <= num2.length; j++) {
//             total = (i * j);
//             multipleList.push(total);
//         };
//     };

//     const evenGroups = (usedArray, arraySize) => {
//         const result = [];

//         for (let i = 0; i < usedArray.length; i += arraySize) {
//             const arrayOf12 = usedArray.slice(i, i + arraySize);
//             result.push(arrayOf12);
//         }
//         return result;
//     }
//     console.log(evenGroups(multipleList, 12));
//     return multipleList;
// }

// numList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// Translate some text to Pig Latin and vice versa.

// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. Therefore, "The quick brown fox" becomes "Hetay uickqay rownbay oxfay".

// const translate = (input) => {
//   const pigLatin = "";
//   const newWord = [...input];
//   console.log(newWord);

//   for( let i = 0; i < newWord.length; i++){
//     if (newWord[i] === [""]) {
//       let firstLetter = newWord[i + 1];
//       let lastLetter = newWord[i - 1];
//     };
//     const firstWord = newWord.shift()
//     console.log(firstWord)
//   }
// }

// translate("The quick brown fox");

// const translate = (input) => {
//   const pigLatin = []
//   console.log(input);
//   function stringHasTheWhiteSpaceOrNot(value){
//    return value.indexOf(' ') >= 0;
//   }
//   const whiteSpace=stringHasTheWhiteSpaceOrNot(input);
//    if(whiteSpace==true){
//      for (let i = 0; i < input.length; i++) {
//        pigLatin.push(input[i])
//        console.log(pigLatin)
//      }
//    }
  //const newWord = [...input]
  // const x = input.split("").map(x => x[0]);
  //console.log(newWord)
  // console.log(x)
  // for (let i = 0; i < newWord.length; i++) {
  //   if ( newWord[i] === [''] && newWord[i] !== newWord[0]) {
  //     let lastLetter = newWord[i-1];
  //     pigLatin.push(newWord[i]);
  //     console.log(pigLatin);
      
  //   }
  //   //console.log(newWord)
  // }
//   console.log(pigLatin)
// }

// translate("The quick brown fox");

const amicablePairs = (input) => {
  let paired = [];
  let amicableNum = [];

  for (let i = 285; i >= 1; i--) {
    for (let j = 1; j < 285; j++) {
      if (i % j === 0) {
        paired.push(j);
        let total = 0;
        for (let k = 1; k <= paired.length; k++) {
          total += k;
          if (total[k] === total[k]) {
            amicableNum.push(total[k])
          }
          console.log(amicableNum);
        };
        console.log("Final Total =", total);
      }
    }
  }
  console.log("AMICABLE", amicableNum)
}

amicablePairs(285);

const getAmicablePairs = (startInput, endInput) => {

  const sum = (startInput, endInput) => {
      let total = 0;
      console.log("input value", startInput, endInput)
      for (let i = startInput; i < endInput; i++) {
        if (endInput % i === 0) {
          total += i;
        }
          //console.log(total);
      };
      //console.log("Final Total =", total);
      console.log(total)
      return total;
  }

  for (let i = startInput; i < endInput; i++) {
    const amicableNumber = sum(i);
    if ((i < amicableNumber) && (sum(amicableNumber) === i)) {
        console.log("List of amicable pairs = ", i, amicableNumber);      
    }
  }
}

getAmicablePairs(1, 100000);
// const fibonacci = (n) => {
//   let list = [1, 1];
  
//   console.log(list);

//   for (let i = n; i <= 100; i++) {
//     let list = list[i-1] + list[i-2]
//   }
// }
// fibonacci(4)
// const fib = (n) => {
//   let total = 0;
//   let list = [];
//   if (n === 1) {
//     list = [1]
//   };
//   if (n === 2) {
//     list = [1, 1]
//   };
//   //console.log(list)

//   for (let i = n; i <= n; i++) {
//     list.push(total)
//     total = ((list[i - 1]) + (list[i - 2]))
//     console.log(i, total, list);
//   }
  
// }
// fib(3)


//let myArray = [1, 1, 2, 3, 5];

// const fiby = (num) => {
//   let myArray = [1, 1, 2, 3, 5]
//   let total = myArray;
//   if (num > 5) {
//     for (let i = num; i <= num; i++) {
//          //total[num] = ((myArray[num - 1]) + (myArray[num - 2]))
//         console.log(total[num])
//     }
    
//     console.log(total)
//   }
//   console.log(total)
//   return total
// }

// fiby(6)

// [1,2,3,4,5,6,7,8,9, 10] -> [1,3,5,7,9] [2,4,6,8,10]
// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const oddOrEven = (input) => {
  
  const oddList = [];
  const evenList = [];

  for (let i = 0; i < input.length; i++) {
    input[i] % 2 === 0 ? evenList.push(input[i]) : oddList.push(input[i])
  }
  const oddAndEven = {
    "Odd List": oddList,
    "Even List": evenList,
  }
   console.log(oddAndEven)
   return (oddAndEven)
}

oddOrEven([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

// const sudokuSolver = (input) => {

// };

// const ages = [8, 10, 12, 2, 18, 24];

// const overTen = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 10) {
//     overTen.push(ages[i]);
//   };
// };
// const overTen = ages.filter(age => age > 10)
// console.log(overTen)

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [8, 10, 12, 2, 18, 24];

const agesSquared = ages.map(age => Math.sqrt(age));
console.log(agesSquared)

// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies)
// const eighties = companies.filter(eighty => eighty.start >= 1980 && eighty.start  < 1990);
// console.log(eighties)
// const lastedTenYears = companies.filter(company => company.end - company.start >= 10)
// console.log(lastedTenYears, lastedTenYears.length)
 */
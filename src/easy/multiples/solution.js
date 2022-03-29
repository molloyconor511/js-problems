const numList = (num1, num2) => {
    let factorialList = [];
    for(let i = num1; i <= (num1 * num2); i += num1) {
      factorialList.push(i)
    };
    console.log("(", num1, ",", num2, ") =>", factorialList);
    return factorialList;
};
  
numList(7, 5);
numList(12, 10);
numList(17, 6);

  //  Work on backticks/$ 
const numList = (num1, num2) => {
    let multipleList = [];
    for(let i = num1; i <= (num1 * num2); i += num1) {
      multipleList.push(i)
    };
    console.log("(", num1, ",", num2, ") =>", multipleList);
    return multipleList;
};
  
numList(7, 5);
numList(12, 10);
numList(17, 6);

  //  Work on backticks/$ 
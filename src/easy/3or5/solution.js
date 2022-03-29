const addNum = (n) => {
    let total = 0;
    for(let i = 0; i < n; i++) {
      if ( i > 0 && (i % 3 === 0 || i % 5 === 0)) {
        console.log("Natural Number =", i)
        total += i;
        console.log("New total =", total)
      }
    }
     console.log("Absolute Total =", total)
  }
  addNum(1000)
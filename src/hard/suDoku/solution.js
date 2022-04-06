const sudokuSolver = (input) => {
    const newArray = [...input];
  
    const makeColumns = (newArray, columnSize) => {
      const columns = [];
  
      for (let i = 0; i < newArray.length; i += columnSize) {
        const size = newArray.slice(i, i + columnSize);
        columns.push(size);
      }
      
      console.log("COLUMNS", columns);
      return columns;
    }
    console.log(makeColumns(newArray, 9));
    let x = makeColumns(newArray, 9);
    
    
    
  }
  
  sudokuSolver("003020600900305001001806400008102900700000008006708200002609500800203009005010300");
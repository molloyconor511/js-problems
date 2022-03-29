const ratingsAdjuster = (ratings, minThreshold, maxThreshold) => {
    const adjustedRatings = [...ratings];
    
    for( let i = 0; i < adjustedRatings.length; i++ ) {
        if ( ratings[i] < minThreshold) {
            adjustedRatings[i] = minThreshold
        } else if (ratings[i] > maxThreshold ) {
            adjustedRatings[i] = maxThreshold
        } 
    }
    console.log("(", "Original Ratings =", ratings, ",", "(", "Low Threshold =", minThreshold, ",", "High Threshold =", maxThreshold, ")", "=>", "Adjusted Ratings =", adjustedRatings, ")")
    return adjustedRatings;
    
  }
  
  ratingsAdjuster([1,3,5,7,9], 2, 8);

function sumOfMinimums(arr) {
    let sum = 0;
    for (let index of arr) {
        let minimum = index[0];
        for (let indeY of index) {
            if (indeY < minimum) {
                minimum = indeY;
            }
        };
        sum += minimum;
    }
    return sum;
  }
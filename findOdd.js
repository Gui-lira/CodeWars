function findOdd(A) {
    let map = {};
    for (let number of A) {
        if (map[number] === undefined) {
            map[number] = 1
        }
        else {
            map[number] += 1
        }
    };
    for (let index in map) {
        if (map[index] % 2 != 0) {
            return index
        }
    }
  }
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
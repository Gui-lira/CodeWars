function findUniq(arr) {
    let unique = arr[0];
    if (unique != arr[1] && unique != arr[2]) {
      return unique
    }
    else {
      for (let index = 1; index < arr.length; index += 1) {
        if (arr[index] != unique) {
          unique = arr[index];
          return unique;
        }
      }
    }
  };
console.log(findUniq([ 1, 2, 1, 1, 1, 1 ]))  
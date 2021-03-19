function flattenAndSort(array) {
    let list = [];
    for (let arrays of array) {
        for (let item of arrays) {
            list.push(item)
        }
    }
    return list.sort(function(a,b) {return a - b})
  }
  console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))
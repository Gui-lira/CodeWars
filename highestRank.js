function highestRank(arr){
    function times(a,b) {
        let total = 0
        for (let item of a) {
            if (item === b) {
                total += 1;
            }
        }
        return total;
    }
    let ocurrence = arr[0];
    for (let item of arr) {
        if (times(arr, item) === times(arr,ocurrence) && item > ocurrence) {
            ocurrence = item
        }
        else if (times(arr, item) > times(arr,ocurrence)) {
            ocurrence = item
        }
    }
    return ocurrence;
    }

    console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
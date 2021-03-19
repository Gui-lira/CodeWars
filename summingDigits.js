function sumDigits(number) {
    let str = number + '';
    let list = str.split('');
    let sum = 0;
    for (let index of list) {
        if (index != '-') {
            sum += Number(index)
        }
    }
    return sum;
}


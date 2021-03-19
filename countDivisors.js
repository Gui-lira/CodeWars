function getDivisorsCnt(n){
    let counter = 0;
    for (let divisor = 1; divisor <= n; divisor += 1) {
        if (n % divisor === 0) {
            counter += 1
        }
    };
    return counter;
}
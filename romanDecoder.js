function solution(roman){
    let decoder =  {'I': 1,'V': 5,'X': 10,'L': 50, 'C': 100,'D': 500,'M': 1000};
    let sum = 0;
    for (let index = 0; index < roman.length; index += 1) {
        let futureIndex = index + 1;
        if (decoder[roman[index]] < decoder[roman[futureIndex]]) {
            sum -= decoder[roman[index]]
        }
        else {
            sum += decoder[roman[index]]
        }
    }
    return sum;
  }
  
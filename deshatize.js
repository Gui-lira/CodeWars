function dashatize(num) {
    if (num < 0) {
        num = num * -1
    }
    let str = num + '';
    let returnStr = '';
    for (let number = 0; number < str.length; number +=1) {
        if (number = 0 && parseInt(str[number]) % 2 != 0 ) {
            returnStr += str[number] + '-'
        }
        else if (parseInt(str[number]) % 2 != 0 && returnStr[returnStr.length -1] != '-') {
            returnStr += '-' + str[number] + '-'
        }
        else if (parseInt(str[number]) % 2 != 0 && returnStr[returnStr.length -1] === '-') {
            returnStr += str[number] + '-'
        }
        else {
            returnStr += str[number]
        }
    }
    return returnStr;
  }
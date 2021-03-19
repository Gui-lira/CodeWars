function kebabize(str) {
    let kebabize = '';
    for (let letter of str ) {
        if (letter === str[0] && letter != Number(letter) && letter != '-') {
            kebabize += letter.toLowerCase()
        }
        else if (letter === letter.toUpperCase() && letter != Number(letter) && letter != str[0]) {
            kebabize += '-' + letter.toLowerCase() 
        }
        else if (letter != Number(letter) && letter != '-')    {
            kebabize += letter.toLowerCase()
        }
    };
    return kebabize;
  }
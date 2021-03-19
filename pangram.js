function isPangram(string){
  let map = {};
  let counter = 0
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let str = string.toLowerCase();
  for (let index = 0; index < str.length; index += 1) {
      if (alphabet.includes(str[index]) && map[str[index]] === undefined) {
        map[str[index]] = 1;
        counter += 1;
      }
  }
  
  if (counter < alphabet.length) {
    return false
  }
  else {
    return true
  }
  }
  console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
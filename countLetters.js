function letterCount(s){
    let map = {};
    for (let index = 0; index < s.length; index += 1) {
        if (map[s[index]] === undefined) {
            map[s[index]] = 1
        }
        else {
            map[s[index]] += 1
        }
    };
    return map;
  }
  console.log(letterCount('asfghjtiaa'))
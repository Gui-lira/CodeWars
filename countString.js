function count (string) {  
    let object = {};
    for (character of string) {
        if (object[character] === undefined) {
            object[character] = 1
        }
        else {
            object[character] += 1
        }
    };
    return object
  }
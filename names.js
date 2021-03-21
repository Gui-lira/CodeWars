function list(names){
    let str = '';
    for (let item of names) {
        if (names.length > 1 && item != names[names.length - 1] && item != names[[0]]) {
            str +=  ', ' + item['name'] 
        }
        else if (names.length > 1 && item === names[names.length - 1]) {
            str += ' & ' + item['name']
        }
        else {
            str += item['name']
        }
    }
    return str;
  }

  console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
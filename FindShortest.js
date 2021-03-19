function findShort(s){
 let list = s.split(' ');
 let word = list[0];
 let counter = word.length;
 for (let index of list) {
     if (index.length < word.length) {
         word = index;
         counter = index.length
     }
 }
 return counter;
}
function arrayDiff(a, b) {
   let list = [];
   for (let number of a) {
       if (b.includes(number) === false) {
           list.push(number)
       }
   }
   return list;
    }

console.log(arrayDiff([1,2,3,4,5,6],[6]))
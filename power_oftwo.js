function isPowerOfTwo(n){
   if (n === 1) {
       return true
   }
   else if (n === 0) {
       return false
   }
   else {
      return Number.isInteger(Math.log2(n))
   }
  }
console.log(isPowerOfTwo(234))
function sumPrimes(num) {
    let primes= [];
    for(let i=2; i<=num; i++){
      if(primes.every(item=>i%item !== 0)){
        primes.push(i);
      }
    }
    let sum = primes.reduce((sum, item)=>sum+item);
    return sum;
  }
  
  sumPrimes(10)
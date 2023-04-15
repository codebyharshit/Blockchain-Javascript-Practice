// Write a javascript  program to find the factorial of all prime numbers between a given range. 

function prime(start, end) {
    let primes = [];
    let factorials = [];
  
    // Find all prime numbers between start and end
    for (let i = start; i <= end; i++) {
      let isPrime = true;
  
      // Check if i is prime
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime && i > 1) {
        primes.push(i);
      }
    }
  
    // Find the factorial of each prime number
    for (let i = 0; i < primes.length; i++) {
      let factorial = 1;
  
      for (let j = 1; j <= primes[i]; j++) {
        factorial *= j;
      }
  
      factorials.push(factorial);
    }
  
    return factorials;
  }
  
  // Example usage: prime(1, 100)
  console.log(prime(1, 100));
  
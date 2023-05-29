// Write a program to check if a given number is Armstrong or not

// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153


function isArmstrongNumber(number) {
    const numOfDigits = number.toString().length;
    let sum = 0;
    let temp = number;
  
    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, numOfDigits);
      temp = Math.floor(temp / 10);
    }
    return sum === number;
  }
  
  let number = 153;
  let result = isArmstrongNumber(number);
  
  console.log(`${number} is ${result ? 'an Armstrong number' : 'not an Armstrong number'}.`);


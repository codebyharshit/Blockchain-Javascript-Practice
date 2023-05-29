//Write a program to check a number is Special Number or not

// If the sum of the factorial of digits of a number (N) is equal to the
// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14

function isSpecialNumber(number) {
  let sum = 0;
  let temp = number;

  while (temp > 0) {
    let digit = temp % 10;
    console.log(digit);
    sum += factorial(digit);
    console.log(sum);
    temp = Math.floor(temp / 10);
  }
  return sum === number;
}

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

const result = isSpecialNumber(145);

console.log(result);
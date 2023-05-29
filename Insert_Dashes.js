//Add dash between two even numbers 

function insertDashes(number) {
  const digits = number.toString().split("");
  console.log(digits);
  let result = "";

  for (let i = 0; i < digits.length; i++) {
    result += digits[i];

    if (digits[i] % 2 === 0 && digits[i + 1] % 2 === 0) {
      result += '-';
    }
  }

  return result;
}

const finalValue = insertDashes(2546186);
console.log(finalValue);

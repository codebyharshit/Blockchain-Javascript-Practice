//Find the Nth largest number in the array

function sortArrayDescending(array) {
  array.sort(function (a, b) {
    return b - a;
  });

  return array;
}

function find_largest(number) {
  const sortedValues = sortArrayDescending(values);
  return sortedValues[number];
}

let values = [3, 45, 6, 7, 23, 5, 7, 8];

let n_value = 3;
const finalValue = find_largest(n_value - 1);
console.log(n_value + " Largest value in the array is " + finalValue);

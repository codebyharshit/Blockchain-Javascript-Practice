// Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let sumOfNum = 0;

const findSum = () => {
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sumOfNum += i;
    }
  }
  console.log("sumOfNum", sumOfNum);
};

findSum();
// Using Javascript print this pattern

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let number = 1;

//first we assign a variable and initialize value 1 to it
// then run these for loops, one for numbers 1-10 and one to change the line

for (let j = 1; j <= 4; j++) {
  let values = " ";
  for (let i = 1; i <= j; i++) {
    values += number + " ";
    number++;
  }
  console.log(values);
}

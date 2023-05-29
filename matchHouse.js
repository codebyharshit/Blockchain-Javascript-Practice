// Write a Program to check the number of matchSticks required to design a matchhouse

function matchHouse(number) {
  if (number == 1) {
    return 6;
  } else if (number > 1) {
    return 1 + number * 5;
  }
  return 0;
}

const answer = matchHouse(0);
console.log(answer);

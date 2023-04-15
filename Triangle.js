//Check the type of Triangle between (Equilateral, Isosceles and Scalene)

function checkTriangleType(sideA, sideB, sideC) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      // If any side is not positive, it's not a valid triangle
      return "Not a valid triangle";
    } else if (sideA === sideB && sideB === sideC) {
      // All sides are equal, so it's an equilateral triangle
      return "Equilateral triangle";
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      // Two sides are equal, so it's an isosceles triangle
      return "Isosceles triangle";
    } else {
      // No sides are equal, so it's a scalene triangle
      return "Scalene triangle";
    }
  }
  
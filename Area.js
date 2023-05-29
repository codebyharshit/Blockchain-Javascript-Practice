//Area of Rectangle and Square

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

let rectangle = new Rectangle(4, 5);
console.log("Area of Rectangle : ", rectangle.area());

let square = new Square(4); 
console.log("Area of Square : ", square.area());


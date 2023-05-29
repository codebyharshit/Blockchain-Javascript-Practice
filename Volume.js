// Define a class called "Person"
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    const volume = ((22 / 7) * this.radius ** 2 * this.height).toFixed(2);
    console.log(volume);
  }
}

class Sphere {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    const volume = (
      (((4 / 3) * 22) / 7) *
      this.radius ** 3 *
      this.height
    ).toFixed(2);
    console.log(volume);
  }
}

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    const volume = (((22 / 7) * this.radius ** 2 * this.height) / 3).toFixed(2);
    console.log(volume);
  }
}

let volumeCylinder = new Cylinder(5, 10);
let volumeSphere = new Sphere(5, 10);
let volumeCone = new Cone(5, 10);

// Calling object methods
volumeCylinder.getVolume();
volumeSphere.getVolume();
volumeCone.getVolume();

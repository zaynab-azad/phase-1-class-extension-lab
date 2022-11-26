// Your code here
class Polygon {
  constructor(nums) {
    this.nums = nums;
  }
  get countSides() {
    return this.nums.length;
  }
  get perimeter() {
    return this.nums.reduce((acc, curr) => acc + curr);
  }
}
class Triangle extends Polygon {
  get isValid() {
    let is = false;
    for (let i = 1; i < this.nums.length; i++) {
      if (this.nums[i - 1] == this.nums[i]) {
        is = true;
      } else {
        is = false;
      }
    }
    return is;
  }
}
class Square extends Polygon {
  get isValid() {
    let is = false;
    for (let i = 1; i < this.nums.length; i++) {
      if (this.nums[i - 1] == this.nums[i]) {
        is = true;
      } else {
        is = false;
      }
    }
    return is;
  }
  get area() {
    return this.nums[0] ** 2;
  }
}

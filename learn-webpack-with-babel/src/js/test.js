console.log("imported module");

class sum {
  constructor(num1, num2) {
    this.number1 = num1;
    this.number2 = num2;
  }

  get sum() {
    return this.calcSum();
  }

  calcSum() {
    return this.number1 + this.number2;
  }
}

export default sum;

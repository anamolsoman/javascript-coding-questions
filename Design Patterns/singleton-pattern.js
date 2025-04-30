let instance = null;

class Counter {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.value = 0;
  }
  Inc() {
    this.value = this.value + 1;
    return this.value;
  }
  Dec() {
    this.value = this.value - 1;
    return this.value;
  }
}

let counter1 = new Counter();
let counter2 = new Counter();
counter1.Inc();
counter1.Inc();
counter2.Inc();

console.log(counter1, counter2);

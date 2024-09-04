class Host {
  constructor() {
    this.observers = []; // Array of observer functions
  }

  subscribe(data) {
    this.observers.push(data);
  }
  unsubscribe(data) {
    this.observers = this.observers.filter((observer) => observer !== data);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

// Observer 1: Logs the data to the console
const observer1 = (data) => {
  console.log(`Observer 1: Received data -> ${data}`);
};

// Observer 2: Logs the length of the data string to the console
const observer2 = (data) => {
  console.log(`Observer 2: Data -> ${data}`);
};

let host = new Host();
host.subscribe(observer1);
host.subscribe(observer2);
host.notify("Hello Observers");

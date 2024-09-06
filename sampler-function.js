function sampler(func, count) {
  let counter = 0;

  return function (...args) {
    counter++;
    if (counter === count) {
      func.call(this, args);
      counter = 0;
    } else {
      console.log("no execution");
    }
  };
}

function helloWorld() {
  console.log("Hello World");
}

const sample = sampler(helloWorld, 3);

sample();
sample();
sample();
sample();
sample();
sample();
sample();

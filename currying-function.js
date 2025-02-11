// Insted of taking all arguments at once currying taken an single argument at a time

//Example



function multiplyBy(a) {
  return (b) => {
    return a * b;
  };
}

let multiplyByFive = multiplyBy(5);

console.log(multiplyByFive(3))


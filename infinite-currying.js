// Write a function to handle the infinite currying

function sum(a) {
  return (b) => {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

console.log(sum(1)(2)(3)(4)(5)(6)());

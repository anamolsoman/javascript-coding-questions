// Call Method Poly fill

//  Call method is used to change the "This " of any function
let obj = { fname: "Anamol", lname: "Soman" };

function printName() {
  return this.fname + this.lname;
}



Function.prototype.customCall = function (context, ...args) {
  context = context || window
  context.fn = this
  let res = context.fn(...args)

  delete context.fn
  return res

};

console.log(printName.customCall(obj));

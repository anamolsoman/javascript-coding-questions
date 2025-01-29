// Call Method Polyfill

let obj = {
  name: "anamol",
};

function printName() {
  console.log(this.name);
}

Function.prototype.customCall = function (arguments) {
  console.log(this, obj, "rr");
  this(obj);
};

printName.customCall(obj);

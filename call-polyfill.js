// Call Method Poly fill

//  Call method is used to change the "This " of any function
let obj = { fname: "Anamol", lname: "Soman" };

function printName() {
  console.log(this)
  return this.fname + this.lname;
}





console.log(printName.call(obj));

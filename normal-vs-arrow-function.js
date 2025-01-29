// Regular Function - They have their own this context, which varies depending on how they’re called
// this.name = "Sagar";
// console.log(window);
// const obj = {
//   name: "anamol",
//   func: function () {
//     console.log(this.name);
//   },
// };

// function globalFunc() {
//   console.log(this.name);
// }
// obj.func();

// globalFunc();

// Arrow Function - They do not have their own this context, instead inheriting it from the surrounding scope.
const objThis = {
  name: "anamol",
  func: () => {
    console.log(this.name);
  },
};

objThis.func();


// function globalFunc() {
//   console.log(this.name);
// }

// globalFunc();

function deepCloneObject(obj) {
  if (obj !== null && typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((val) => {
      return val;
    });
  }

  const clonedObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepCloneObject(obj[key]);
    }
  }

  return clonedObj;
}

const original = {
  name: "Bob",
  details: {
    age: 25,
    hobbies: ["reading", "swimming"],
  },
};

const clone = deepCloneObject(original);
clone.name = "An";
// clone.details.age = 5;

console.log(clone);

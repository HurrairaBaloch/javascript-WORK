// function name(name, args) {}
// var arr = ["name", "ali", "hassan"];
// name("ali", ...arr);

// let array = ["name", "ali", "hassans"];

// let [name, age, kali] = array;
// console.log(kali);

// const person = {
//   name: "ali",
//   age: "88",
//   city: "colony",
//   phone: 12344,
// };

// let name = { ...person };
// console.log(name);

// // const map = new Map([1, "ali"], [2, "b"], [3, "c"], [4, "d"]);
// // console.log(map);

// const set = new Set([1, 1, 3, 4, 4, 4]);

// set.add(5);

// set.clear();
// set.delete(4);
// console.log(set);

function duplicat(array) {
  return [new Set(array)];
}

console.log(duplicat([1, 2, 3, 4, 4, 3, 2, 3, 3]));

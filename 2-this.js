//inside object property
//inside object method
//outside object method
//in a normal function
//in a constructor
//using forEach with regular function
//using forEach with arrow function
//constructor
//prototype
//inheritance
//class
//class inheritance

// const person = {
//   title: "amey",
//   age: 39,
//   salary: function () {
//     console.log(this.age);
//   },
// };
// person.officeName = function () {
//   console.log(this.salary());
// };
// console.log(person.title);
// person.salary();
// person.officeName();

// const person = function () {
//   console.log(this);
// };
// person();

// const Person = function (title, age) {
//   this.title = title;
//   this.age = age;
//   console.log(this);
// };
// const x1 = new Person("amey", 39);
// const x2 = new Person("pratik", 45);
// console.log(x1);
// console.log(x2);

// const person = {
//   title: "amey",
//   age: 39,
//   hobbies: ["cricket", "movies", "running"],
//   address: function () {
//     this.hobbies.forEach(function (hobby) {
//       console.log(this.title, hobby);
//     }, this);
//   },
// };
// person.address();

// const person = {
//   title: "amey",
//   age: 39,
//   hobbies: ["cricket", "movies", "running"],
//   address: function () {
//     this.hobbies.forEach((hobby) => {
//       console.log(this.title, hobby);
//     });
//   },
// };
// person.address();

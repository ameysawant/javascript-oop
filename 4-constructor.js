const Product = function (type, heading, price, minus, expiry) {
  this.type = type;
  this.heading = heading;
  this.price = price;
  this.minus = minus;
  this.expiry = expiry;
  //instead of adding method here add to prototype
  this.discount = function () {
    console.log(this.price - this.minus);
  };
};
const product1 = new Product("juice", "mango", 200, 20, 2025);
const product2 = new Product("milkshake", "chocolate", 400, 50, 2020);

console.log(product1);
console.log(product2);
// product1.discount();
// product2.discount();

// const product = {
//   type: "juice",
//   heading: "mango",
//   price: 200,
//   minus: 20,
//   expiry: 2025,
//   discount: function () {
//     console.log(this.price - this.minus);
//   },
// };
// product.discount();

// const product2 = {
//   type: "milkshake",
//   heading: "chocolate",
//   price: 400,
//   minus: 50,
//   expiry: 2023,
//   discount: function () {
//     console.log(this.price - this.minus);
//   },
// };
// product2.discount();

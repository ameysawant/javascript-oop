//Product Constructor
const Product = function (type, heading, price, minus, expiry) {
  this.type = type;
  this.heading = heading;
  this.price = price;
  this.minus = minus;
  this.expiry = expiry;
};

//prototype method
Product.prototype.discount = function () {
  console.log(this.price - this.minus);
};

//prototype method
Product.prototype.add = function () {
  console.log(this.price + this.minus);
};

//prototype method
Product.prototype.checkExpiry = function () {
  const isExpired = this.expiry > 2022 ? "EXPIRED" : "NOT EXPIRED";
  this.expiry = isExpired;
  console.log("the product is " + this.expiry);
};

const product1 = new Product("juice", "mango", 200, 20, 2025);

//AlmondMilk Constructor
const AlmondMilk = function (type, heading, price, minus, expiry, shipped) {
  Product.call(this, type, heading, price, minus, expiry);
  this.shipped = shipped;
};

//inherit properties
AlmondMilk.prototype = Object.create(Product.prototype);

//create instance
const almondMilk1 = new AlmondMilk(
  "milk",
  "almondmilk",
  1000,
  100,
  2030,
  "yes"
);

//use AlmondMilk Constructor
AlmondMilk.prototype.constructor = AlmondMilk;

console.log(almondMilk1);
almondMilk1.add();
almondMilk1.checkExpiry();

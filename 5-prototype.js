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
const product2 = new Product("milkshake", "chocolate", 400, 50, 2023);

product1.discount();
product1.add();
product1.checkExpiry();

product2.discount();
product2.add();
product2.checkExpiry();

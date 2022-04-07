const product = {
  type: "juice",
  heading: "mango",
  price: 200,
  minus: 20,
  expiry: 2025,
  discount: function () {
    console.log(this.price - this.minus);
  },
};
product.discount();

const product2 = {
  type: "milkshake",
  heading: "chocolate",
  price: 400,
  minus: 50,
  expiry: 2023,
  discount: function () {
    console.log(this.price - this.minus);
  },
};
product2.discount();

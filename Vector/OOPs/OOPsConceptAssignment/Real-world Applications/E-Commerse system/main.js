const Product = require("./Product");
const Order = require("./Order");
function main() {
    const order = new Order("ORD123");
    const product1 = new Product(1, "Laptop", 999.99);
    const product2 = new Product(2, "Mouse", 19.99);

    order.addProduct(product1);
    order.addProduct(product2);

    order.displayOrderDetails();
}

main();

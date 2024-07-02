class Order {
    constructor(orderId) {
        this.orderId = orderId;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    displayOrderDetails() {
        console.log(`Order ID: ${this.orderId}`);
        console.log("Products in the order:");
        this.products.forEach(product => product.displayDetails());
    }
}
module.exports = Order;
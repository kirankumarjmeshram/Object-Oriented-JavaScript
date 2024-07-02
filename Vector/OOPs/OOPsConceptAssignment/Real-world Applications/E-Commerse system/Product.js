class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    displayDetails() {
        console.log(`Product ID: ${this.productId}, Name: ${this.name}, Price: ${this.price}`);
    }
}

module.exports = Product;
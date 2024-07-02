class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: ${this.price}`);
    }
}

module.exports = Book;
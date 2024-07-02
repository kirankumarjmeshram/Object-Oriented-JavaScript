
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    displayBooks() {
        this.books.forEach(book => book.displayDetails());
    }
}

module.exports = Library;
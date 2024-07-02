const  Book = require("./Book" );
const Library = require("./Library");
function main() {
    const library = new Library();
    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 10.99);
    const book2 = new Book("1984", "George Orwell", 8.99);

    library.addBook(book1);
    library.addBook(book2);

    console.log("Books in the library:");
    library.displayBooks();

    library.removeBook("1984");

    console.log("Books in the library after removal:");
    library.displayBooks();
}

main();

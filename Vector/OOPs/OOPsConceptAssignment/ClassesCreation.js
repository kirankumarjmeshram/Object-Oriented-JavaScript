class Book{
  constructor (title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
  }
  displayDetails(){
    console.log(`Title : ${this.title}, Auther : ${this.author}, Price:${this.author}`)
  }
}

 function main() {
    let b1 = new Book('book1','author1', 'price1');
    let b2 = new Book('book2','author2', 'price2');
    b1.displayDetails();
    b2.displayDetails();
 }

 main()

// Title : book1, Auther : author1, Price:author1
// Title : book2, Auther : author2, Price:author2

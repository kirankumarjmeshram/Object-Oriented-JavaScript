const  book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    published: 1960
  }

  console.log(book.title) //To Kill a Mockingbird
  //console.log(book[title]) //title is not defined

  //Key is Always a String
  console.log(book["title"]) //To Kill a Mockingbird 

  /*
Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

The object should contain the following properties:
* name
* price
* ingredients

Hint: Which data collection can hold all the listed ingredients in order?
*/
const menu = {
    name:"Salted Caramel Ice Cream",
    price: 2.95,
    ingredients: ["butter", "ice cream", "salt", "sugar"]
}

console.log(menu)

//Write an expression that outputs how to say hello in Portuguese:
const greetings = {
  hello: {
    english: 'hi',
    french: 'bonjour',
    portuguese: 'oi'
  },
  goodbye: {
    english: 'bye',
    french: 'au revoir',
    portuguese: 'tchau'
  }
};
//solution
console.log(greetings["hello"]["portuguese"]);
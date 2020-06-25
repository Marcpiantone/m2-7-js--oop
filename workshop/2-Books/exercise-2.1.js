// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = false;
  }
}

book1 = new Book("Azarch", "Bande dessinée", "Moebius");
book2 = new Book("Tintin au Tibet", "Bande dessinée", "Hergé");
book3 = new Book("Farenheit 451", "Fiction", "Ray Bradbury");
book4 = new Book("1984", "Fiction", "George Orwell");
book5 = new Book("A Brave New World", "Fiction", "Aldous Huxley");

console.log(book1, book2, book3, book4, book5);

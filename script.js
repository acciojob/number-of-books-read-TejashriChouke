function numberOfBooksRead(library) {
  // Check if the library object has a 'books' property, and if it's an array
  if (library && library.books && Array.isArray(library.books)) {
    // Use the filter method to count books with readingStatus set to true
    const readBooks = library.books.filter(book => book.readingStatus === true);
    return readBooks.length;
  } else {
    // Return 0 if the library object or 'books' property is missing or not an array
    return 0;
  }
}

// Example library object
const library = {
  books: [
    {
      author: "Author 1",
      title: "Book 1",
      readingStatus: true,
    },
    {
      author: "Author 2",
      title: "Book 2",
      readingStatus: false,
    },
    {
      author: "Author 3",
      title: "Book 3",
      readingStatus: true,
    },
  ],
};

// Call the function to get the number of books read
const numBooksRead = numberOfBooksRead(library);
console.log("Number of books read:", numBooksRead); // Output: 2

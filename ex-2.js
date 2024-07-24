function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let indexBook = -1;
  let left = 0;
  let right = books.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (books[mid].title === searchTitle) {
      return mid;
    } else if (books[mid].title < searchTitle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return indexBook;
}

books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

searchBook1 = "Gone with the Wind";
searchBook2 = "The Master Mind";

console.log(findBookIndex(books, searchBook1));
console.log(findBookIndex(books, searchBook2));
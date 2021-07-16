const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const listBooks = () => books;

export const book = (title: string) => books.find((book) => book.title === title);
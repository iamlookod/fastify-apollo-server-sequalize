const users = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const listUsers = () => users;

export const user = (title: string) => users.find((book) => book.title === title);
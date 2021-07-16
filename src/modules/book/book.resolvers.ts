
import { listBooks } from './book.services'
const resolvers = {
  Query: {
    books: listBooks,
    book: (_parent: any, args: any) => args,
  },
};

export default resolvers;

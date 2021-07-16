import { gql } from "apollo-server-fastify";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(title: String): Book
  }
`;

export default typeDefs;

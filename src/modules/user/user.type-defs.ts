import { gql } from "apollo-server-fastify";

const typeDefs = gql`
  type User {
    title: String
    author: String
  }

  type Query {
    users: [User]
    user(title: String): User
  }
`;

export default typeDefs;

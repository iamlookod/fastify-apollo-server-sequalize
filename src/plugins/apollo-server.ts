import { FastifyInstance, FastifyRequest } from "fastify";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
// import { mergeResolvers, loadFilesSync } from "graphql-tools";
import { buildSchema } from "type-graphql";
import * as path from "path";
import config from '../config'

const apolloServer = async (app: FastifyInstance) => {
  const schema = await buildSchema({
    resolvers: [path.resolve(__dirname, "..") + "/modules/**/*.resolvers.*"],
  });

  const server = new ApolloServer({
    context: (request: FastifyRequest) => {
      return {
        ...request,
      }
    },
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start()

  app.register(
    server.createHandler({
      path: config.gqlPath,
    })
  );
};

export default apolloServer;

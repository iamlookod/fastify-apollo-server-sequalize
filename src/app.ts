import fastify from "fastify";
import cors from "fastify-cors";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { mergeTypeDefs, mergeResolvers, loadFilesSync } from "graphql-tools";
import * as dotenv from "dotenv";
import { sequalize } from "./plugins/db";

dotenv.config();

const typeDefs = mergeTypeDefs(
  loadFilesSync([__dirname + "/modules/**/*.type-defs.*"])
);

const resolvers = mergeResolvers(
  loadFilesSync([__dirname + "/modules/**/*.resolvers.*"])
);

const models = [__dirname + "/modules/**/*.models.*"];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const app = fastify();

app.get("/", async (request, reply) => {
  reply.redirect("/api/gql");
});

app.get("/health-check", async () => {
  return "status ok";
});

const bootstrap = async () => {
  await server.start();

  app.register(cors, {});

  app.register(
    server.createHandler({
      path: "/api/gql",
    })
  );

  sequalize
    .authenticate()
    .then(() => {
      console.log("Database conneted");
      sequalize.addModels(models);
    })
    .catch((err) => console.log(err.message));

  app.listen(process.env.PORT || 5000, "0.0.0.0", (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(
      `Server listening at http://localhost:${process.env.PORT} || ${address}`
    );
  });
};

bootstrap();

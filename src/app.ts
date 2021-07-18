import fastify from "fastify";
import fastifyCors from "fastify-cors";
import db from "./plugins/db";
import apolloserver from "./plugins/apollo-server";
import jwt from "express-jwt";
import fastifyExpress from "fastify-express";
import routers from "./routers";
import config from "./config";

const bootstrap = async () => {
  const app = fastify();
  app.register(fastifyCors);
  app.register(routers);
  await app.register(fastifyExpress);
  app.use(
    config.gqlPath,
    jwt({
      algorithms: [],
      credentialsRequired: false,
      secret: config.jwtSecret,
    })
  );
  apolloserver(app);
  db();

  app.listen(config.port, "0.0.0.0", (err, address) => {
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

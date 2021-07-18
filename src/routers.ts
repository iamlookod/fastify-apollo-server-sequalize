import { FastifyInstance } from 'fastify'

const routers = async (app: FastifyInstance) => {
  app.get("/", async (_request, reply) => {
    reply.redirect("/api/graphql");
  });

  app.get("/api/health-check", async () => {
    return "status ok";
  });
}

export default routers;

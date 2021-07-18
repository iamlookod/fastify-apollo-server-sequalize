
import * as dotenv from 'dotenv';
import { Options } from 'sequelize/types'

dotenv.config();

interface IConfig {
  port: number;
  jwtSecret: string;
  database: Options
  gqlPath: string;
}

const config: IConfig = {
  port: Number(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET || "secret",
  database: {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "postgres",
    logging: process.env.NODE_ENV === "developement" ? true : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  gqlPath: "/api/graphql",
};

export default config;
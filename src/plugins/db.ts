import { Sequelize } from "sequelize-typescript";
import * as path from 'path';
import config from "../config";

const db = async () => {
  const sequelize = new Sequelize({
    ...config.database,
    query: {
      raw: true,
    },
    models: [path.resolve(__dirname, "..") + "/modules/**/*.model.*"],
    modelMatch: (filename, member) => {
      return (
        filename.substring(0, filename.indexOf(".model")) ===
        member.toLowerCase()
      );
    },
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Database conneted");
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
}

export default db;

import { Sequelize } from "sequelize-typescript";
import config from "../config";

export const sequalize = new Sequelize({ ...config.database })

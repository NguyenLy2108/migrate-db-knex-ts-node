require('dotenv').config()
import { Knex } from "knex";

const config: Record<string, Knex.Config> = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST_LOCAL,
      port: parseInt(process.env.DB_PORT_LOCAL || "5436"),
      database: process.env.DB_DATABASE_LOCAL,
      user: process.env.DB_USER_LOCAL,
      password: process.env.DB_PASSWORD_LOCAL,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
  test: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST_TEST,
      port: parseInt(process.env.DB_PORT_TEST || "5437"),
      database: process.env.DB_DATABASE_TEST,
      user: process.env.DB_USER_TEST,
      password: process.env.DB_PASSWORD_TEST,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST_PROD,
      port: parseInt(process.env.DB_PORT_PROD || "5436"),
      database: process.env.DB_DATABASE_PROD,
      user: process.env.DB_USER_PROD,
      password: process.env.DB_PASSWORD_PROD,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
export default config;

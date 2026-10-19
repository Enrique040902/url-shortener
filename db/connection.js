import { Pool } from "pg";

const config = {
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_DB,
  password: process.env.PSQL_PASSWORD,
  port: process.env.PSQL_PORT,
  max: 20
};

const db = new Pool(config);
export default db;
import { Pool } from "pg";
import dotenv  from "dotenv";
dotenv.config();

const connectionString = process.env.CONNECT_POSTGRESQL

const db = new Pool({ connectionString });

export default db;
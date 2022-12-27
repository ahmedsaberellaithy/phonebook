import { Pool } from "pg";

export async function connectToDB(dbConfig) {
  try {
    const pool = new Pool(dbConfig);
    console.log("Connecting to the DB");
    console.log({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });
    await pool.connect();
    return {
      connected: true,
      message: `we are connected to db ${process.env.DB_HOST}:${process.env.DB_NAME}`,
    };
  } catch (err) {
    console.log(err);
    return {
      connected: false,
      message: err,
    };
  }
}

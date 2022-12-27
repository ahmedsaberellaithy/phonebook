import dotenv from "dotenv";
import { createServer } from "./utils/server";
import { connectToDB } from "./utils/db-connect";

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5433"),
};
const port = process.env.PORT;
connectToDB(dbConfig).then((dbConnectionStatus) =>
  console.log(dbConnectionStatus)
);

createServer()
  .then((server) => {
    server.listen(port, () => {
      console.log(`${process.env.APP_NAME} is running at ${port}`);
    });
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });

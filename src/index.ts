import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();

  await MongoClient.connect();

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`server is running on ${port}`));
};

main();

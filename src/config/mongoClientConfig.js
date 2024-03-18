const e = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_HOST;
const port = process.env.DB_PORT;
const db = process.env.DB_DATABASE;

const connectToMongoDb = async () => {
  const url = "mongodb://" + uri + "/" + db;
  console.log("trying to establish connection to: " + url);
  const client = new MongoClient(url, {
    socketTimeoutMS: 30000, // Set timeout to 30 seconds (30000 milliseconds)
  });
  try {
    await client.connect();
    console.log("established connection to mongo let's go");
    return client.db();
  } catch (err) {
    console.error("error while connecting to mongo db " + err);
    throw err;
  }
};

module.exports = { connectToMongoDb };

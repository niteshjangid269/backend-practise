import dotenv from "dotenv";
import connectDB from "./db/db.js";
// import { DB_NAME } from "./constants.js";
dotenv.config({
  path: "./env",
});

connectDB();

// import mongoose from "mongoose";

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("MongoDB Connected.");
//   } catch (error) {
//     console.log("MongoDB Connection Failed", error);
//     throw error;
//   }
// })();

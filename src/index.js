import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is Running on Port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed!!!", error);
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("MongoDB Connected.");
//   } catch (error) {
//     console.log("MongoDB Connection Failed", error);
//     throw error;
//   }
// })();

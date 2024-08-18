import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
app.use(cors());
// app.use(dotenv());
dotenv.config();
app.use(express.json());  // postman se body me raw me json data bhej rahe.. usko smjh jaye apna backend isliye likha h
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(process.env.MONGO_URL)
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));

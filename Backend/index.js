import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from 'path';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connected to  MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB Error", err));

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// deployment
if(process.env.NODE_ENV === "production"){
   const dirPath = path.resolve();

   app.use(express.static("./Frontend/dist"));
   app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath, "./Frontend/dist","index.html"));
   })
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


app.get('/', (req, res) => {
  res.send('Hello  JHUMA  JHUMA!')
})

//connected to  MongoDB
mongoose.connect(URI)
.then(()=>console.log("MongoDB connected"))
.catch((err)=> console.log("MongoDB Error", err));

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


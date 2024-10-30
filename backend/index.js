import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import booksroute from "./routes/booksroute.js";
import cors from "cors";
//import booksRoute from "./routes"

console.log('Current directory:', process.cwd());
console.log('Environment variables:', process.env);
const app = express();

app.use(express.json());

//middleware for handling cors policy
//1. allow all origins with default of cors(*)
app.use(cors());
//2. allow custom origins
// app.use(
//     cors(
//         {
//             origin :'http://localhost:5555',
//             methods:['GET','POST','PUT','DELETE'],
//             allowedHeaders : ['Content-Type'],
//         }
//     )
// );



app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Book store project MERN");
});

app.use("/books", booksroute);

console.log('Attempting to connect to MongoDB with URL:', mongodbURL);
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`APP started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

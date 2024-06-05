import express from "express";
import { PORT, mongoDBUrl} from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

//middleware for parsing request body
app.use(express.json());

app.use(cors());
app.use('/books', booksRoute)

//app.use(
  //cors(
   // {
   //   origin: 'http://localhost:3000',
   //   methods: ['GET','POST', 'PUT', 'DELETE'],
    //  allowedHeaders: ['Content-Type'],
 //   }
 // ))
app.get('/', (request,response)=> {
    console.log(request);
    return response.status(234).send(`This is my first MERN project`);
});


mongoose
  .connect(mongoDBUrl)
  .then(()=> {
      console.log('App is connected')
      app.listen(PORT, ()=> {
        console.log(`App is listening to ${PORT}`)
    })
  })
  .catch((error)=> {
    console.log(error);
  })
  
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';

dotenv.config();
const port = process.env.PORT || 3001; 

// routes
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';



// db connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname  = path.resolve();

// express framework for building  rest api
const app = express();

app.use(express.json());


app.use(cookieParser());


app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  // res.send("health cheack is ok");
  res.json({
    message: "routes are working",
  });
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'client','dist','index.html'));
})


app.use((err,req,res,next) => {

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,

  });
});
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3001; 

// routes
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


// db connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// express framework for building  rest api
const app = express();

app.use(express.json());




app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  // res.send("health cheack is ok");
  res.json({
    message: "health cheack is ok",
  });
});
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3001; 

import userRouter from './routes/user.route.js'



mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();


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
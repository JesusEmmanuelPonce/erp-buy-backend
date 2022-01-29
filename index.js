import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import 'dotenv/config'

require('dotenv').config()
const app = express();

connectDB()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log("Server run");
})
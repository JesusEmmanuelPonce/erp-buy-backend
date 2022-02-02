import cors    from "cors";
import express from "express";
import 'dotenv/config'

import connectDB     from "./config/db";
import CategoryRoute from "./routes/CategoryRoute";
import ArticleRoute  from "./routes/ArticleRoute";

require('dotenv').config()
const app = express();

connectDB()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/category", CategoryRoute);
app.use("/api/article", ArticleRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server run");
})
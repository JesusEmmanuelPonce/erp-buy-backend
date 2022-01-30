import cors          from "cors";
import express       from "express";
import 'dotenv/config'

import router        from "./routes";
import connectDB     from "./config/db";

require('dotenv').config()
const app = express();

connectDB()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/api", router);

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log("Server run");
})
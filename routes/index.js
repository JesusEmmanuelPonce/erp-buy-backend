import express from "express";
import CategoryRouter from "./CategoryRoute";

const router = express.Router();

router.use("/category", CategoryRouter);

export default router;

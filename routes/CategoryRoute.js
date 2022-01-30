import express            from "express";
import CategoryController from "../controllers/CategoryController";

const router = express.Router();

router.post("/add", CategoryController.add);
router.get("/query", CategoryController.query);
router.get("/list", CategoryController.list);
router.put("/update", CategoryController.update);
router.delete("/delete", CategoryController.remove);
router.post("/change-status", CategoryController.changeStatus);

export default router;
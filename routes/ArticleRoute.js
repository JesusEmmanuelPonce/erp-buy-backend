import express           from "express";
import ArticleController from "../controllers/ArticleController";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("from article")
});
router.post("/add", ArticleController.add);
router.get("/query", ArticleController.query);
router.get("/list", ArticleController.list);
router.put("/update", ArticleController.update);
router.delete("/delete", ArticleController.remove);
router.post("/change-status", ArticleController.changeStatus);

export default router;
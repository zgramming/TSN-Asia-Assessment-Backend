import { Router } from "express";
import { AssessmentController } from "controllers/assessment.controller";

const router = Router();
const controller = new AssessmentController();

router.get("/", controller.get);

router.get("/:id", controller.getDetail);

router.post("/", controller.create);

export default router;

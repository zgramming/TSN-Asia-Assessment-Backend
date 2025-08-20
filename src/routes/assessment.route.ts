import { Router } from "express";
import { AssessmentController } from "@controllers/assessment.controller";

const router = Router();
const controller = new AssessmentController();

router.get("/", controller.get);

router.get("/:code", controller.getDetail);
router.get("/summary/:respondentId", controller.getSummary);

router.post("/", controller.create);

export default router;

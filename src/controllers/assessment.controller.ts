import { Request, Response } from "express";
import { AssessmentService } from "@services/assessment.service";

const service = new AssessmentService();

export class AssessmentController {
  async get(req: Request, res: Response) {
    try {
      const response = await service.get();
      return res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching assessments:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async getDetail(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await service.getDetail(Number(id));
      return res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching assessment detail:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const response = await service.create(data);
      return res.status(201).json(response);
    } catch (error) {
      console.error("Error creating assessment:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

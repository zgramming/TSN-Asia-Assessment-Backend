import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "@config/database";
import AssessmentRoute from "@routes/assessment.route";
import "./models/table/index";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the TSN Assessment Form Backend!");
});

app.use("/api/assessments", AssessmentRoute);

database
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error: any) => {
    console.error("Error synchronizing database:", error);
  });

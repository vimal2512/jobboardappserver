import express from "express";
import { getJobs, createJob } from "../controllers/jobController.js";

const router = express.Router();

router.get("/jobs", getJobs);
router.post("/jobs", createJob);

export default router;

import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: false },
  description: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;


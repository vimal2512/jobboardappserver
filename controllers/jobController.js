import Job from "../models/jobModel.js";

// Get all jobs with filtering, search & pagination
export const getJobs = async (req, res) => {
  try {
    const { search, type, location, page = 1, limit = 10 } = req.query;
    const query = {};

    if (search) query.title = { $regex: search, $options: "i" };
    if (type) query.type = type;
    if (location) query.location = { $regex: location, $options: "i" };

    const jobs = await Job.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ postedAt: -1 });

    const totalJobs = await Job.countDocuments(query);

    res.json({ jobs, totalJobs, totalPages: Math.ceil(totalJobs / limit) });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Create a new job posting
export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: "Invalid Job Data", error });
  }
};


export const createProfile = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: "Invalid Job Data", error });
  }
};


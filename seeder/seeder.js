import mongoose from "mongoose";
import dotenv from "dotenv";
import Job from "../models/jobModel.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const jobs = [

  {
    title: "Backend Developer",
    company: "ServerTech",
    location: "Remote",
    salary: "110000",
    description: "Work with Node.js and Express."
  },
  {
    title: "Data Scientist",
    company: "DataCorp",
    location: "Seattle",
    salary: "120000",
    description: "Analyze large datasets using Python and ML."
  },{
    title: "MERN Stack Developer",
    company: "DataCorp",
    location: "Seattle",
    salary: "120000",
    description: "Work with react,node,express,mongoDb"
  },{
    
        title: "Java Developer",
        company: "DataCorp",
        location: "Seattle",
        salary: "120000",
        description: "Work with Java"
      
  }

];

const seedDB = async () => {
  try {
    await Job.deleteMany(); // Clears existing jobs
    await Job.insertMany(jobs);
    console.log("Database Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();

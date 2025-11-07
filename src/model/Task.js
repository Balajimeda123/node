import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  desc: String,
  date: String,
  status: String,
});

export default mongoose.model("Task", TaskSchema);

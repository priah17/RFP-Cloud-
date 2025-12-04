import mongoose from "mongoose";

const rfpSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  deadline: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("RFP", rfpSchema);

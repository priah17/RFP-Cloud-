import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema({
  rfpId: { type: mongoose.Schema.Types.ObjectId, ref: "RFP" },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: Number,
  timeline: String,
  details: String
}, { timestamps: true });

export default mongoose.model("Proposal", proposalSchema);

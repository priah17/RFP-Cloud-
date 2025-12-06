// models/vendor.js
import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String },
  contactNumber: { type: String },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;

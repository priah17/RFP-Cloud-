import express from "express";
import Vendor from "../models/Vendor.js";

const router = express.Router();

// Create Vendor
router.post("/", async (req, res) => {
  const vendor = new Vendor(req.body);
  await vendor.save();
  res.json(vendor);
});

// List Vendors
router.get("/", async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
});

export default router;

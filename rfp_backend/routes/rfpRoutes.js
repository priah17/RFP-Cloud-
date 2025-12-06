// routes/rfpRoutes.js
import express from "express";
import { createRFP, getAllRFPs } from "../controllers/rfpController.js";
import { protect } from "../middleware/authMiddleware.js";
import { sendEmail } from "../emailService.js";
import Vendor from "../models/vendor1.js"; // make sure this matches your model

const router = express.Router();

// Publish RFP and send emails to vendors
router.post("/publish", async (req, res) => {
  const rfp = req.body;

  try {
    // Get all active vendors
    const vendors = await Vendor.find({ status: "active" });

    // Send email to each vendor
    for (const vendor of vendors) {
      await sendEmail({
        to: vendor.email,
        subject: `New RFP: ${rfp.title}`,
        text: rfp.description,
      });
    }

    res.json({ success: true, message: "RFP published and emails sent." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to send emails" });
  }
});

// Other RFP routes
router.post("/", protect, createRFP);
router.get("/", getAllRFPs);

export default router;

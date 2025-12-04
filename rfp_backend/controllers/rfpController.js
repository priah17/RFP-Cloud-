// rfpController.js
import RFP from "../models/RFP.js";
import { sendEmail } from "../utils/email.js"; // our email utility

// Create a new RFP and send it to vendors
export const createRFP = async (req, res) => {
  try {
    // Create RFP in database
    const newRFP = await RFP.create({ ...req.body, createdBy: req.user.id });

    // Send email to vendors if vendorEmails are provided
    const { vendorEmails } = req.body; // array of vendor emails
    if (vendorEmails && vendorEmails.length > 0) {
      for (const email of vendorEmails) {
        await sendEmail({
          to: email,
          subject: `New RFP: ${newRFP.title}`,
          text: `Dear Vendor,\n\nYou have a new RFP:\n${newRFP.description}`,
          html: `<p>Dear Vendor,</p>
                 <p>You have a new RFP:</p>
                 <b>${newRFP.title}</b>
                 <p>${newRFP.description}</p>`,
        });
      }
    }

    res.status(201).json({ message: "RFP created and emails sent!", rfp: newRFP });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create RFP" });
  }
};

// Get all RFPs
export const getAllRFPs = async (req, res) => {
  try {
    const rfps = await RFP.find().populate("createdBy", "name email");
    res.json(rfps);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch RFPs" });
  }
};

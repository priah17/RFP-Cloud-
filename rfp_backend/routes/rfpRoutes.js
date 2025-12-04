import express from "express";
import { createRFP, getAllRFPs } from "../controllers/rfpController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createRFP);
router.get("/", getAllRFPs);

export default router;

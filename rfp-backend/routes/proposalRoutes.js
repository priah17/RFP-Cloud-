import express from "express";
import { submitProposal, getProposalsByRFP } from "../controllers/proposalController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, submitProposal);
router.get("/:rfpId", getProposalsByRFP);

export default router;

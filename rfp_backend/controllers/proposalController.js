import Proposal from "../models/Proposal.js";

export const submitProposal = async (req, res) => {
  try {
    const proposal = await Proposal.create({
      ...req.body,
      vendorId: req.user.id
    });
    res.json(proposal);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getProposalsByRFP = async (req, res) => {
  const proposals = await Proposal.find({ rfpId: req.params.rfpId })
    .populate("vendorId", "name email");
  res.json(proposals);
};


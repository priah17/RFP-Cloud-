// src/services/proposal.js
import API from "./api";

export const submitProposal = (payload) => API.post("/proposals", payload); // protected
export const getProposalsForRFP = (rfpId) => API.get(`/proposals/${rfpId}`);

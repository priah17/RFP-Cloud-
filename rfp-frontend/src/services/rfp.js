// src/services/rfp.js
import API from "./api";

export const getRFPs = () => API.get("/rfps");            // GET /api/rfps
export const createRFP = (payload) => API.post("/rfps", payload); // protected
export const getRFP = (id) => API.get(`/rfps/${id}`);

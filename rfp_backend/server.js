import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import rfpRoutes from "./routes/rfpRoutes.js";
import proposalRoutes from "./routes/proposalRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 RFP Cloud Backend is Running Successfully!");
});

app.use("/api/auth", authRoutes);
app.use("/api/rfps", rfpRoutes);
app.use("/api/proposals", proposalRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Backend running on port ${process.env.PORT}`)
);

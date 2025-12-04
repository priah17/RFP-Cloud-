// src/pages/ProposalComparison.jsx
import React from "react";

export default function ProposalComparison() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center", // Center heading and paragraph
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#36486fff" }}>
        Proposal Comparison
      </h1>
      <p style={{ marginTop: "10px", fontSize: "1.1rem" }}>
        Compare submitted proposals from vendors side by side.
      </p>

      {/* Comparison Cards / Table */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {/* Example Proposal Card */}
        <div
          style={{
            width: "300px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Cloud Migration Proposal
          </h3>
          <p>Vendor: CloudX Solutions</p>
          <p>Cost: $15,000</p>
          <p>Timeline: 4 weeks</p>
          <p>Notes: Migration with minimal downtime</p>
        </div>

        <div
          style={{
            width: "300px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Kubernetes Setup Proposal
          </h3>
          <p>Vendor: DevOpsPro</p>
          <p>Cost: $12,500</p>
          <p>Timeline: 3 weeks</p>
          <p>Notes: Setup with monitoring and auto-scaling</p>
        </div>

        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

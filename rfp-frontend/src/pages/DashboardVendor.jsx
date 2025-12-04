import React from 'react';
import RfpCard from '../components/RfpCard.jsx';

export default function DashboardVendor() {
  // Dummy RFPs for vendor to respond
  const rfps = [
    { title: "Cloud Migration Project", deadline: "2025-12-20", description: "Submit your proposal for migrating to AWS." },
    { title: "Kubernetes Setup", deadline: "2025-12-25", description: "Submit your proposal for Kubernetes cluster setup." },
    { title: "Data Backup System", deadline: "2025-12-30", description: "Submit your proposal for cloud backup system." }
  ];

  // Dummy activity feed
  const activities = [
    "You submitted a proposal for Cloud Migration Project",
    "Vendor X submitted a proposal for Kubernetes Setup",
    "Proposal review started for Data Backup System"
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", color: "#059669", marginBottom: "20px" }}>
        Vendor Dashboard
      </h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        View RFPs you can respond to and track your proposals.
      </p>

      {/* RFP List */}
      <h2 style={{ fontSize: "2rem", color: "#10B981", textAlign: "center", marginBottom: "20px" }}>
        Available RFPs
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
        {rfps.map((rfp, index) => (
          <RfpCard key={index} title={rfp.title} description={`${rfp.description} | Deadline: ${rfp.deadline}`} />
        ))}
      </div>

      {/* Recent Activity */}
      <h2 style={{ fontSize: "2rem", color: "#10B981", textAlign: "center", marginBottom: "20px" }}>
        Recent Activity
      </h2>
      <ul style={{ maxWidth: "600px", margin: "0 auto", padding: "10px", listStyle: "disc", fontSize: "1.1rem" }}>
        {activities.map((act, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>{act}</li>
        ))}
      </ul>

      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button style={{
          margin: "10px", padding: "12px 24px", backgroundColor: "#059669", color: "#fff",
          borderRadius: "6px", border: "none", cursor: "pointer"
        }}>
          Submit Proposal
        </button>
        <button style={{
          margin: "10px", padding: "12px 24px", backgroundColor: "#3B82F6", color: "#fff",
          borderRadius: "6px", border: "none", cursor: "pointer"
        }}>
          View My Proposals
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import RfpCard from '../components/RfpCard.jsx';

export default function DashboardOrganization() {
  // Dummy data for stats
  const stats = [
    { title: "Total RFPs", value: 12 },
    { title: "Proposals Received", value: 34 },
    { title: "Active Vendors", value: 8 },
    { title: "Pending Actions", value: 5 }
  ];

  // Dummy RFPs
  const rfps = [
    { title: "Cloud Migration Project", deadline: "2025-12-20", status: "Open", proposals: 5 },
    { title: "Kubernetes Setup", deadline: "2025-12-25", status: "In Review", proposals: 3 },
    { title: "Data Backup System", deadline: "2025-12-30", status: "Open", proposals: 7 }
  ];

  // Dummy recent activities
  const activities = [
    "Vendor X submitted a proposal for Cloud Migration Project",
    "RFP Kubernetes Setup is approaching deadline",
    "Proposal Y approved for Data Backup System"
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", color: "#36486fff", marginBottom: "20px" }}>
        Organization Dashboard
      </h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Manage your RFPs, track proposals, and monitor vendor activity.
      </p>

      {/* Stats Cards */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            minWidth: "150px", textAlign: "center"
          }}>
            <h2 style={{ fontSize: "1.5rem", color: "#36486fff", marginBottom: "5px" }}>{stat.value}</h2>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      {/* RFP List */}
      <h2 style={{ fontSize: "2rem", color: "#36486fff", marginBottom: "20px", textAlign: "center" }}>
        Your RFPs
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
        {rfps.map((rfp, index) => (
          <RfpCard
            key={index}
            title={rfp.title}
            description={`Deadline: ${rfp.deadline} | Status: ${rfp.status} | Proposals: ${rfp.proposals}`}
          />
        ))}
      </div>

      {/* Recent Activity */}
      <h2 style={{ fontSize: "2rem", color: "#36486fff", marginBottom: "20px", textAlign: "center" }}>
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
          margin: "10px", padding: "12px 24px", backgroundColor: "#3B82F6", color: "#fff",
          borderRadius: "6px", border: "none", cursor: "pointer"
        }}>
          Create New RFP
        </button>
        <button style={{
          margin: "10px", padding: "12px 24px", backgroundColor: "#10B981", color: "#fff",
          borderRadius: "6px", border: "none", cursor: "pointer"
        }}>
          Export Report
        </button>
      </div>
    </div>
  );
}


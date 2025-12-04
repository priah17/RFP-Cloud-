// src/pages/AdminPanel.jsx
import React from "react";

export default function AdminPanel() {
  // Dummy data for illustration
  const users = [
    { name: "Alice", email: "alice@example.com", role: "Organization", status: "Active" },
    { name: "Bob", email: "bob@example.com", role: "Vendor", status: "Inactive" },
  ];

  const rfps = [
    { title: "Cloud Migration Project", organization: "Org A", deadline: "2025-12-15", status: "Open" },
    { title: "Kubernetes Setup", organization: "Org B", deadline: "2025-12-20", status: "Closed" },
  ];

  const proposals = [
    { rfp: "Cloud Migration Project", vendor: "CloudX Solutions", cost: "$15,000", timeline: "4 weeks" },
    { rfp: "Kubernetes Setup", vendor: "DevOpsPro", cost: "$12,500", timeline: "3 weeks" },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#dc2626" }}>Admin Panel</h1>
      <p style={{ marginTop: "10px", fontSize: "1.1rem" }}>
        Manage users, organizations, RFPs, and system settings.
      </p>

      {/* Quick Action Buttons */}
      <div style={{ margin: "30px 0", display: "flex", justifyContent: "center", gap: "15px" }}>
        <button style={{ padding: "10px 20px", backgroundColor: "#3B82F6", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}>Create RFP</button>
        <button style={{ padding: "10px 20px", backgroundColor: "#10B981", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}>Export Reports</button>
        <button style={{ padding: "10px 20px", backgroundColor: "#F59E0B", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}>Send Notifications</button>
      </div>

      {/* Dashboard Stats */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
        <div style={{ flex: "1 1 200px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>
        <div style={{ flex: "1 1 200px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h3>Total RFPs</h3>
          <p>{rfps.length}</p>
        </div>
        <div style={{ flex: "1 1 200px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h3>Total Proposals</h3>
          <p>{proposals.length}</p>
        </div>
      </div>

      {/* Users Table */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#dc2626", marginBottom: "10px" }}>Users & Vendors</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={{ padding: "8px" }}>Name</th>
              <th style={{ padding: "8px" }}>Email</th>
              <th style={{ padding: "8px" }}>Role</th>
              <th style={{ padding: "8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{u.name}</td>
                <td style={{ padding: "8px" }}>{u.email}</td>
                <td style={{ padding: "8px" }}>{u.role}</td>
                <td style={{ padding: "8px" }}>{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RFPs Table */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#dc2626", marginBottom: "10px" }}>RFPs</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={{ padding: "8px" }}>Title</th>
              <th style={{ padding: "8px" }}>Organization</th>
              <th style={{ padding: "8px" }}>Deadline</th>
              <th style={{ padding: "8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rfps.map((r, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{r.title}</td>
                <td style={{ padding: "8px" }}>{r.organization}</td>
                <td style={{ padding: "8px" }}>{r.deadline}</td>
                <td style={{ padding: "8px" }}>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Proposals Table */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#dc2626", marginBottom: "10px" }}>Proposals</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={{ padding: "8px" }}>RFP</th>
              <th style={{ padding: "8px" }}>Vendor</th>
              <th style={{ padding: "8px" }}>Cost</th>
              <th style={{ padding: "8px" }}>Timeline</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((p, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{p.rfp}</td>
                <td style={{ padding: "8px" }}>{p.vendor}</td>
                <td style={{ padding: "8px" }}>{p.cost}</td>
                <td style={{ padding: "8px" }}>{p.timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


import React from 'react';

// You can replace these URLs with your own images later
const cloudImage = "https://www.dataquest.io/wp-content/uploads/2025/03/Cloud-Deployment-Models.png.webp";
const serverImage = "https://i0.wp.com/biitsinc.com/wp-content/uploads/2023/06/cloud-infrastucture.jpg";
const analyticsImage = "https://media.gettyimages.com/id/1685560996/photo/collaborative-corporate-finance-analysis-businesspeople-strategizing-on-monitor-graph.jpg?s=2048x2048&w=gi&k=20&c=eAeqMKnilohkqD5pGu_j-0gV_XNw8tOV-5nQOtta7b4=";
const securityImage = "https://www.shutterstock.com/shutterstock/photos/2519475403/display_1500/stock-vector-secure-cloud-storage-cloud-icon-inside-transparent-protection-sphere-shield-with-hexagon-pattern-2519475403.jpg";
const flowImage = "https://media.designrush.com/tinymce_images/200246/conversions/rfp-process-content.jpg";

export default function Home() {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Welcome Section */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "3rem", color: "#1E3A8A" }}>Cloud RFP Hub</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Welcome to the RFP Portal for Cloud Deployment Services and Infrastructure Support.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "20px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
    Cloud computing has revolutionized how organizations deploy and manage IT resources. With cloud 
    services, businesses can scale their infrastructure on-demand, reduce upfront costs, and improve 
    reliability and security. Our RFP portal helps organizations find the best cloud deployment vendors, 
    ensuring projects are completed efficiently and meet modern infrastructure requirements.
  </p>
      </section>

      {/* What We Offer */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", color: "#36486fff", marginBottom: "20px" }}>What We Offer</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          
  <div style={{ flex: "1 1 250px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
    <img src={cloudImage} alt="Cloud Deployment" width="250" style={{ marginBottom: "20px" }} />
    <h3>Cloud Deployment Services</h3>
    <p>Quickly deploy applications on cloud platforms like AWS, Azure, or GCP.</p>
  </div>

  <div style={{ flex: "1 1 250px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
    <img src={serverImage} alt="Infrastructure Setup" width="250" style={{ marginBottom: "20px" }} />
    <h3>Infrastructure Setup & Management</h3>
    <p>Automated provisioning of servers, networks, and storage for enterprises.</p>
  </div>

  <div style={{ flex: "1 1 250px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
    <img src={analyticsImage} alt="Analytics" width="250" style={{ marginBottom: "20px" }} />
    <h3>Analytics & Reports</h3>
    <p>Generate detailed reports on vendor responses, budgets, and timelines.</p>
  </div>

  <div style={{ flex: "1 1 250px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
    <img src={securityImage} alt="Secure" width="250" style={{ marginBottom: "20px" }} />
    <h3>Secure & Transparent Process</h3>
    <p>RFP submissions and vendor data are securely stored and tracked.</p>
  </div>

</div>
      </section>

      {/* How It Works */}
      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#36486fff", marginBottom: "20px" }}>How It Works</h2>
        <img src={flowImage} alt="Flow" style={{ maxWidth: "400px", marginBottom: "20px" }} />
        <p>Organizations post RFPs → Vendors submit proposals → Admin reviews and compares → Projects move forward.</p>
      </section>

      {/* Why Choose Us */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", color: "#36486fff", marginBottom: "20px" }}>Why Choose Our Portal</h2>
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          <li>✅ Saves time with automated RFP process.</li>
          <li>✅ Helps find the best vendors for cloud deployment.</li>
          <li>✅ Provides a clear dashboard for tracking RFPs and responses.</li>
          <li>✅ Offers a secure environment for sensitive business data.</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <button style={{ margin: "10px", padding: "12px 24px", backgroundColor: "#3B82F6", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}>
          Post Your First RFP
        </button>
        <button style={{ margin: "10px", padding: "12px 24px", backgroundColor: "#10B981", color: "#fff", borderRadius: "6px", border: "none", cursor: "pointer" }}>
          Browse RFPs as Vendor
        </button>
      </section>

    </div>
  );
}

